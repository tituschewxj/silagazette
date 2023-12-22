const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});

const getFormattedDate = (dateString: string) => {
    const parsedDate = Date.parse(dateString);
    const formattedDate = dateFormatter.format(parsedDate);
    return formattedDate;
};

export default getFormattedDate;
