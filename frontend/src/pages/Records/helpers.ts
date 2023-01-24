import moment from "moment";

export const formDate = (date: string) => {
    return moment(date).format('DD/MM/YYYY HH:mm');
}