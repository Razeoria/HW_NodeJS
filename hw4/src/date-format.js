import { DateTime } from 'luxon';

const now = DateTime.now();

console.log(`Дата (dd-mm-yyyy): ${now.toFormat('dd-LL-yyyy')}`);
console.log(`Месяц и день (LLL dd yy): ${now.toFormat('LLL dd yy')}`);
console.log(`День недели: ${now.toFormat('cccc')}`);
