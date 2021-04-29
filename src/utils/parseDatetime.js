export const parseDatetime = (datetime) => {
    const original = new Date(datetime);
    const formatted = new Intl.DateTimeFormat('es', {
        year: 'numeric',
        month:'short',
        day: '2-digit',
        timeZone: 'UTC'
    }).format(original);
    return formatted;
};