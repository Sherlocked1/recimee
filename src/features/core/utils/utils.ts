export const getTimeStringOf = (minutes: number): string => {
    var hours = Math.floor(minutes / 60);
    var mins = minutes % 60;

    return hours + ":" + mins;
}
