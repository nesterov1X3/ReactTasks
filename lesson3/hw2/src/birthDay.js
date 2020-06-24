import moment from 'moment';

const birthD = (date) => {
    return moment(new Date(date)).format('DD MMM YY');
 }

 export default birthD;