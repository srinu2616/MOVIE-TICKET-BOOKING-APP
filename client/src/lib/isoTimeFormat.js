const isoTimeFormat = (dateTime) => {
    // Convert the input to a Date object if it's not already
    const date = new Date(dateTime);

    // If it's invalid, return a fallback string
    if (isNaN(date)) return "Invalid Time";

    // Format the time
    const localTime = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    return localTime;
};

export default isoTimeFormat;
