import { Inngest } from "inngest";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "movie-ticket-booking" });

// Fixed: SyncUserCreation
const SyncUserCreation = inngest.createFunction(
    { id: 'sync-user-from-clerk' },
    { event: 'clerk/user.created' },
    async ({ event }) => {
        try {
            const { id, first_name, last_name, email_addresses, image_url } = event.data;
            
            const userData = {
                _id: id,
                email: email_addresses[0]?.email_address, // Fixed this line
                name: `${first_name} ${last_name}`.trim(),
                image: image_url
            };
            
            console.log('Creating user:', userData); // Add logging
            await User.create(userData);
            console.log('User created successfully');
            
        } catch (error) {
            console.error('Error creating user:', error);
            throw error; // Re-throw to see the error in Inngest
        }
    }
);

// Fixed: SyncUserUpdation
const SyncUserUpdation = inngest.createFunction(
    { id: 'update-user-from-clerk' },
    { event: 'clerk/user.updated' },
    async ({ event }) => {
        try {
            const { id, first_name, last_name, email_addresses, image_url } = event.data;
            
            const userData = {
                email: email_addresses[0]?.email_address, // Fixed this line
                name: `${first_name} ${last_name}`.trim(),
                image: image_url
            };
            
            console.log('Updating user:', id, userData); // Add logging
            const updatedUser = await User.findByIdAndUpdate(
                id, 
                userData, 
                { new: true, runValidators: true }
            );
            console.log('User updated:', updatedUser);
            
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    }
);

// SyncUserDeletion (already correct, but add error handling)
const SyncUserDeletion = inngest.createFunction(
    { id: 'delete-user-with-clerk' },
    { event: 'clerk/user.deleted' },
    async ({ event }) => {
        try {
            const { id } = event.data;
            console.log('Deleting user:', id);
            await User.findByIdAndDelete(id);
            console.log('User deleted successfully');
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }
);

export const functions = [SyncUserCreation, SyncUserDeletion, SyncUserUpdation];