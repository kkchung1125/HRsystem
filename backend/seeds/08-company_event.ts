import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // check before insert instead of deleting table
  async function seedRow(table: string, rowData: object) {
    let row = await knex(table).select('id').where(rowData).first();
    if (!row) {
      let rows = await knex(table).insert(rowData).returning('id');
      row = rows[0];
    }
    return row;
  }
  await seedRow('event', {
    event_name: 'Annual Dinner',
    date: '2022-12-30',
    detail: '7pm - 10pm',
  });
  await seedRow('event', { event_name: 'Fire Drill', date: '2023-01-09' });
  await seedRow('event', {
    event_name: 'Road Show',
    date: '2022-12-09',
    detail: '3pm - 6pm',
  });
  await seedRow('event', {
    event_name: 'Team Building',
    date: '2022-12-12',
    details: 'full day',
  });
  await seedRow('event', {
    event_name: 'Holiday Parties',
    date: '2022-12-03',
    detail: 'full day',
  });
  await seedRow('event', {
    event_name: 'Team Building lunch',
    date: '2022-12-02',
    detail: '12pm - 2pm',
  });

  await seedRow('event', {
    event_name: 'React Native Seminar',
    date: '2022-12-04',
    detail: '3pm - 5pm',
  });
  await seedRow('event', {
    event_name: 'Yoga class',
    date: '2022-12-05',
    detail: '6pm - 8pm',
  });
  await seedRow('event', {
    event_name: 'React Seminar',
    date: '2022-12-06',
    detail: '3pm - 5pm',
  });
  await seedRow('event', {
    event_name: 'NestJS Seminar',
    date: '2022-12-07',
    detail: '5pm - 7pm',
  });
  await seedRow('event', {
    event_name: 'Python Seminar 1',
    date: '2022-12-08',
    detail: '6pm - 8pm',
  });
  await seedRow('event', {
    event_name: 'Python Seminar 2',
    date: '2022-12-09',
    detail: '6pm - 8pm',
  });
  await seedRow('event', {
    event_name: 'Python Seminar 3',
    date: '2022-12-10',
    detail: '6pm - 8pm',
  });
  await seedRow('event', {
    event_name: 'TensorFlow Seminar 3',
    date: '2022-12-11',
    detail: '6pm - 8pm',
  });

  await seedRow('event', {
    event_name: 'Flutter Seminar',
    date: '2022-12-12',
    detail: '8pm - 10pm',
  });
  await seedRow('event', {
    event_name: 'Team Lunch (Manager)',
    date: '2022-12-13',
    detail: '12pm - 2pm',
  });
}
