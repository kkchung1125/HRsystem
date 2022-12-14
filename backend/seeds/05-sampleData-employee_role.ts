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
  await seedRow('employee_role', {
    employeeid: 1,
    department_id: 1,
    team_id: 1,
    title_id: 1,
  });
  await seedRow('employee_role', {
    employeeid: 2,
    department_id: 1,
    team_id: 1,
    title_id: 2,
  });
  await seedRow('employee_role', {
    employeeid: 3,
    department_id: 1,
    team_id: 1,
    title_id: 3,
  });
  await seedRow('employee_role', {
    employeeid: 4,
    department_id: 4,
    team_id: 1,
    title_id: 4,
  });
  await seedRow('employee_role', {
    employeeid: 5,
    department_id: 4,
    team_id: 1,
    title_id: 5,
  });
  await seedRow('employee_role', {
    employeeid: 6,
    department_id: 5,
    team_id: 1,
    title_id: 6,
  });
  await seedRow('employee_role', {
    employeeid: 7,
    department_id: 9,
    team_id: 1,
    title_id: 7,
  });
  await seedRow('employee_role', {
    employeeid: 8,
    department_id: 9,
    team_id: 1,
    title_id: 7,
  });
  await seedRow('employee_role', {
    employeeid: 9,
    department_id: 5,
    team_id: 2,
    title_id: 9,
  });
  await seedRow('employee_role', {
    employeeid: 10,
    department_id: 9,
    team_id: 1,
    title_id: 10,
  });
  await seedRow('employee_role', {
    employeeid: 11,
    department_id: 4,
    team_id: 1,
    title_id: 11,
  });
  await seedRow('employee_role', {
    employeeid: 12,
    department_id: 5,
    team_id: 3,
    title_id: 12,
  });
  await seedRow('employee_role', {
    employeeid: 13,
    department_id: 9,
    team_id: 1,
    title_id: 13,
  });
  await seedRow('employee_role', {
    employeeid: 14,
    department_id: 5,
    team_id: 2,
    title_id: 14,
  });
  await seedRow('employee_role', {
    employeeid: 15,
    department_id: 5,
    team_id: 2,
    title_id: 15,
  });
  await seedRow('employee_role', {
    employeeid: 16,
    department_id: 4,
    team_id: 1,
    title_id: 16,
  });
  await seedRow('employee_role', {
    employeeid: 17,
    department_id: 4,
    team_id: 1,
    title_id: 16,
  });
  await seedRow('employee_role', {
    employeeid: 18,
    department_id: 4,
    team_id: 1,
    title_id: 16,
  });
  await seedRow('employee_role', {
    employeeid: 19,
    department_id: 5,
    team_id: 1,
    title_id: 19,
  });
  await seedRow('employee_role', {
    employeeid: 20,
    department_id: 5,
    team_id: 3,
    title_id: 20,
  });
  await seedRow('employee_role', {
    employeeid: 21,
    department_id: 6,
    team_id: 1,
    title_id: 21,
  });
  await seedRow('employee_role', {
    employeeid: 22,
    department_id: 6,
    team_id: 1,
    title_id: 22,
  });
  await seedRow('employee_role', {
    employeeid: 23,
    department_id: 6,
    team_id: 1,
    title_id: 23,
  });
}
