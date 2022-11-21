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

  await seedRow('employee', {
    employeeID: 'DEMO001',
    first_name: 'Tse Hin',
    last_name: 'Chan',
    chinese_name: '陳梓軒',
    alias: 'Liam',
    HKID: 'X522891(9)',
    gender: 'M',
    nationality: 'China',
    date_of_birth: '1997-07-24',
    age: '25',
    mobile_countrycode: '86',
    mobile_no: '62862337',
    work_phone_no: '28886289',
    email_personal: 'liamchan@gmail.com',
    email_work: 'tse.hin.chan@company.com',
    highest_education: 'Bachelor',
    institution_name: 'City University of Hong Kong',
    major: 'Actuarial Science',
    last_job_company: 'Bank of China',
    last_job_title: 'Director',
    start_date: '14/1/2010',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '90',
    report_to: 1,
    AL_leave_entitled: '20',
    pay_currency: 'HKD',
    basic_salary: '100000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 12, 3/F, Fu Fai Yuen, Chi Fu Fa Yuen, Pok Fu Lam',
    bank_code: '221',
    bank_name: 'China Construction Bank Corporation',
    bank_number: '381-133443-792',
    bank_payee: 'Chan Tse Hin',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO002',
    first_name: 'Yu Hin',
    last_name: 'Lee',
    chinese_name: '李宇軒',
    alias: 'Noah',
    HKID: 'Y672490(4)',
    gender: 'M',
    nationality: 'UK',
    date_of_birth: '30/6/1990',
    age: '32',
    mobile_countrycode: '44',
    mobile_no: '93420837',
    work_phone_no: '28882518',
    email_personal: 'noahlee@gmail.com',
    email_work: 'yu.hin.lee@company.com',
    highest_education: 'Bachelor',
    institution_name: 'Hong Kong Baptist University',
    major: 'Sociology',
    last_job_company: 'Bank of China',
    last_job_title: 'CEO',
    start_date: '28/1/2012',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '90',
    report_to: 1,
    AL_leave_entitled: '20',
    pay_currency: 'HKD',
    basic_salary: '85000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 1, 9/F, Yiu Hei House, Tung Hei Court, Shau Kei Wan',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '165-678784-803',
    bank_payee: 'Lee Yu Hin',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO003',
    first_name: 'Tse Him',
    last_name: 'Cheung',
    chinese_name: '張子謙',
    alias: 'Oliver',
    HKID: 'Z885789(8)',
    gender: 'M',
    nationality: 'HK',
    date_of_birth: '16/6/1996',
    age: '26',
    mobile_countrycode: '852',
    mobile_no: '91501947',
    work_phone_no: '28884923',
    email_personal: 'olivercheung@gmail.com',
    email_work: 'tse.him.cheung@company.com',
    highest_education: 'Bachelor',
    institution_name: 'Lingnan University',
    major: 'Chemistry',
    last_job_company: 'Bank of East Asia',
    last_job_title: 'Finance Controller',
    start_date: '23/1/2012',
    have_probation: 'FALSE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '90',
    report_to: 1,
    AL_leave_entitled: '20',
    pay_currency: 'HKD',
    basic_salary: '80000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 3, 6/F, Block 3, La Cite Noble, Tseung Kwan O',
    bank_code: '024',
    bank_name: 'Hang Seng Bank Limit',
    bank_number: '487-532513-528',
    bank_payee: 'Cheung Tse Him',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO004',
    first_name: 'Lok Him',
    last_name: 'Wong',
    chinese_name: '黃樂軒',
    alias: 'Elijah',
    HKID: 'X223216(2)',
    gender: 'M',
    nationality: 'UK',
    date_of_birth: '17/3/1995',
    age: '27',
    mobile_countrycode: '44',
    mobile_no: '93054043',
    work_phone_no: '28881488',
    email_personal: 'elijahwong@gmail.com',
    email_work: 'lok.him.wong@company.com',
    highest_education: 'Bachelor',
    institution_name: 'The Hong Kong University of Science and Technology',
    major: 'Social Media',
    last_job_company: 'Cable TV Hong Kong',
    last_job_title: 'Sales Manager',
    start_date: '18/1/2014',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '90',
    report_to: 2,
    AL_leave_entitled: '18',
    pay_currency: 'HKD',
    basic_salary: '75000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 2, 18/F, Choi Ying House, Choi Po Court, Sheung Shui',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '602-665770-246',
    bank_payee: 'Wong Lok Him',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO005',
    first_name: 'Tse Long',
    last_name: 'Ho',
    chinese_name: '何子朗',
    alias: 'James',
    HKID: 'Y848205(6)',
    gender: 'M',
    nationality: 'HK',
    date_of_birth: '14/6/1993',
    age: '29',
    mobile_countrycode: '852',
    mobile_no: '56224875',
    work_phone_no: '28887058',
    email_personal: 'jamesho@gmail.com',
    email_work: 'tse.long.ho@company.com',
    highest_education: 'Bachelor',
    institution_name: 'The University of Hong Kong',
    major: 'Biology',
    last_job_company: 'Café de Coral',
    last_job_title: 'Sales Manager',
    start_date: '8/1/2015',
    have_probation: 'FALSE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '60',
    report_to: 4,
    AL_leave_entitled: '17',
    pay_currency: 'HKD',
    basic_salary: '55000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 6, 12/F, Yee Dat House, Yee Nga Court, Tai Po',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '106-694690-758',
    bank_payee: 'Ho Tse Long',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO006',
    first_name: 'Ka Lok',
    last_name: 'Chan',
    chinese_name: '陳家樂',
    alias: 'William',
    HKID: 'Z744887(9)',
    gender: 'M',
    nationality: 'China',
    date_of_birth: '28/9/1992',
    age: '30',
    mobile_countrycode: '86',
    mobile_no: '58700496',
    work_phone_no: '28885202',
    email_personal: 'williamchan@gmail.com',
    email_work: 'ka.lok.chan@company.com',
    highest_education: 'Master',
    institution_name: 'The Chinese University of Hong Kong',
    major: 'Art',
    last_job_company: 'Capital Artists',
    last_job_title: 'Marketing Associate',
    start_date: '4/1/2015',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '60',
    report_to: 2,
    AL_leave_entitled: '16',
    pay_currency: 'HKD',
    basic_salary: '50000',
    payment_method: 'bank_transfer',
    home_address:
      'Flat 4, 15/F, High Block, Hok Sam House, Lung Hang Estate, Tai Wai',
    bank_code: '214',
    bank_name: 'Industrial and Commercial Bank of China Limited',
    bank_number: '378-220494-809',
    bank_payee: 'Chan Ka Lok',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO007',
    first_name: 'Cheuk Lam',
    last_name: 'Lee',
    chinese_name: '李卓霖',
    alias: 'Benjamin',
    HKID: 'X864027(2)',
    gender: 'M',
    nationality: 'UK',
    date_of_birth: '14/1/2000',
    age: '22',
    mobile_countrycode: '44',
    mobile_no: '65763566',
    work_phone_no: '28881943',
    email_personal: 'benjaminlee@gmail.com',
    email_work: 'cheuk.lam.lee@company.com',
    highest_education: 'Master',
    institution_name: 'The Education University of Hong Kong',
    major: 'Statistics',
    last_job_company: 'Cathay Dragon',
    last_job_title: 'Finance Manager',
    start_date: '2/2/2015',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '60',
    report_to: 3,
    AL_leave_entitled: '14',
    pay_currency: 'HKD',
    basic_salary: '45000',
    payment_method: 'bank_transfer',
    home_address:
      'Flat 5, 18/F, Block A, Tai Yan House, Tai Yuen Estate, Tai Po',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '586-695232-132',
    bank_payee: 'Lee Cheuk Lam',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO008',
    first_name: 'Tse Hin',
    last_name: 'Cheung',
    chinese_name: '張子軒',
    alias: 'Lucas',
    HKID: 'Y399057(3)',
    gender: 'M',
    nationality: 'HK',
    date_of_birth: '3/10/1999',
    age: '23',
    mobile_countrycode: '852',
    mobile_no: '64613791',
    work_phone_no: '28889142',
    email_personal: 'lucascheung@gmail.com',
    email_work: 'tse.hin.cheung@company.com',
    highest_education: 'Bachelor',
    institution_name: 'The Hong Kong Polytechnic University',
    major: 'English',
    last_job_company: 'Cathay Pacific',
    last_job_title: 'Finance Manager',
    start_date: '25/2/2016',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'retired',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 3,
    AL_leave_entitled: '14',
    pay_currency: 'HKD',
    basic_salary: '40000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 6, 39/F, Kai Tung House, Yu Tung Court, Tung Chung',
    bank_code: '024',
    bank_name: 'Hang Seng Bank Limit',
    bank_number: '390-469227-726',
    bank_payee: 'Cheung Tse Hin',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO009',
    first_name: 'Chun Hei',
    last_name: 'Wong',
    chinese_name: '黃俊熙',
    alias: 'Henry',
    HKID: 'Z725242(4)',
    gender: 'M',
    nationality: 'China',
    date_of_birth: '2/2/2000',
    age: '22',
    mobile_countrycode: '86',
    mobile_no: '95017697',
    work_phone_no: '28884277',
    email_personal: 'henrywong@gmail.com',
    email_work: 'chun.hei.wong@company.com',
    highest_education: 'Bachelor',
    institution_name: 'City University of Hong Kong',
    major: 'Sculpture',
    last_job_company: 'Chekiang First Bank',
    last_job_title: 'Social Media Manager',
    start_date: '9/2/2017',
    have_probation: 'FALSE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 6,
    AL_leave_entitled: '14',
    pay_currency: 'HKD',
    basic_salary: '40000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 13, 15/F, Block 3, Fu Ning Garden, Tseung Kwan O',
    bank_code: '221',
    bank_name: 'China Construction Bank Corporation',
    bank_number: '182-722587-169',
    bank_payee: 'Wong Chun Hei',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO010',
    first_name: 'Ho Yin',
    last_name: 'Ho',
    chinese_name: '何浩賢',
    alias: 'Theodore',
    HKID: 'X992757(6)',
    gender: 'M',
    nationality: 'UK',
    date_of_birth: '25/2/1994',
    age: '28',
    mobile_countrycode: '44',
    mobile_no: '92870011',
    work_phone_no: '28881146',
    email_personal: 'theodoreho@gmail.com',
    email_work: 'ho.yin.ho@company.com',
    highest_education: 'Bachelor',
    institution_name: 'Hong Kong Baptist University',
    major: 'Photography',
    last_job_company: 'Chinachem Group',
    last_job_title: 'Analyst',
    start_date: '17/3/2017',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 7,
    AL_leave_entitled: '14',
    pay_currency: 'HKD',
    basic_salary: '40000',
    payment_method: 'bank_transfer',
    home_address:
      'Flat 5, 33/F, Fei Fung House, Choi Wan (I) Estate, Ngau Chi Wan',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '808-914629-797',
    bank_payee: 'Ho Ho Yin',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO011',
    first_name: 'Hoi Ching',
    last_name: 'Chan',
    chinese_name: '陳凱晴',
    alias: 'Olivia',
    HKID: 'Y142917(7)',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '9/2/1997',
    age: '25',
    mobile_countrycode: '852',
    mobile_no: '95071970',
    work_phone_no: '28887952',
    email_personal: 'oliviachan@gmail.com',
    email_work: 'hoi.ching.chan@company.com',
    highest_education: 'Bachelor',
    institution_name: 'Lingnan University',
    major: 'History',
    last_job_company: 'Chu Kong Passenger Transport Co., Ltd',
    last_job_title: 'Sale Associate',
    start_date: '14/4/2018',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 5,
    AL_leave_entitled: '12',
    pay_currency: 'HKD',
    basic_salary: '35000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 11, 6/F, Tower 4, Goodview Garden, Tuen Mun',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '100-887364-402',
    bank_payee: 'Chan Hoi Ching',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO012',
    first_name: 'Tse Ching',
    last_name: 'Lee',
    chinese_name: '李芷晴',
    alias: 'Emma',
    HKID: 'Z421447(10)',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '28/1/1990',
    age: '32',
    mobile_countrycode: '852',
    mobile_no: '51090294',
    work_phone_no: '28883075',
    email_personal: 'emmalee@gmail.com',
    email_work: 'tse.ching.lee@company.com',
    highest_education: 'Bachelor',
    institution_name: 'The Hong Kong University of Science and Technology',
    major: 'Chemistry',
    last_job_company: 'CITIC Bank International',
    last_job_title: 'Marketing Coodinator',
    start_date: '16/4/2018',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 6,
    AL_leave_entitled: '11',
    pay_currency: 'HKD',
    basic_salary: '30000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 2, 6/F, Tower 2, The Waterside, Ma On Shan',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '204-735459-437',
    bank_payee: 'Lee Tse Ching',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO013',
    first_name: 'Hiu Ching',
    last_name: 'Cheung',
    chinese_name: '張曉晴',
    alias: 'Charlotte',
    HKID: 'X451067(10)',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '14/4/1996',
    age: '26',
    mobile_countrycode: '852',
    mobile_no: '58278813',
    work_phone_no: '28887376',
    email_personal: 'charlottecheung@gmail.com',
    email_work: 'hiu.ching.cheung@company.com',
    highest_education: 'Master',
    institution_name: 'The University of Hong Kong',
    major: 'Graphic Design',
    last_job_company: 'City Telecom',
    last_job_title: 'Analyst',
    start_date: '30/6/2018',
    have_probation: 'FALSE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 7,
    AL_leave_entitled: '10',
    pay_currency: 'HKD',
    basic_salary: '30000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 2, 3/F, Yuen Fu House, Tin Fu Court, Tin Shui Wai',
    bank_code: '214',
    bank_name: 'Industrial and Commercial Bank of China Limited',
    bank_number: '152-560128-168',
    bank_payee: 'Cheung Hiu Ching',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO014',
    first_name: 'Tse Ching',
    last_name: 'Wong',
    chinese_name: '黃子晴',
    alias: 'Amelia',
    HKID: 'Y946972(8)',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '23/1/1995',
    age: '27',
    mobile_countrycode: '852',
    mobile_no: '67289843',
    work_phone_no: '28887728',
    email_personal: 'ameliawong@gmail.com',
    email_work: 'tse.ching.wong@company.com',
    highest_education: 'Master',
    institution_name: 'The Chinese University of Hong Kong',
    major: 'Statistics',
    last_job_company: 'Citybus Limited',
    last_job_title: 'Copywriter',
    start_date: '16/6/2019',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 9,
    AL_leave_entitled: '10',
    pay_currency: 'HKD',
    basic_salary: '28000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 1, 15/F, Lok Kwai House, Kwai Fuk Court, Kwai Chung',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '555-815215-634',
    bank_payee: 'Wong Tse Ching',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO015',
    first_name: 'Hoi Lam',
    last_name: 'Ho',
    chinese_name: '何凱琳',
    alias: 'Ava',
    HKID: 'Z449276(8)',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '18/1/1993',
    age: '29',
    mobile_countrycode: '852',
    mobile_no: '66549830',
    work_phone_no: '28881173',
    email_personal: 'avaho@gmail.com',
    email_work: 'hoi.lam.ho@company.com',
    highest_education: 'Bachelor',
    institution_name: 'The Education University of Hong Kong',
    major: 'Political Science',
    last_job_company: 'CK Hutchison Holdings',
    last_job_title: 'Copywriter (Chi and Eng)',
    start_date: '14/6/2020',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 9,
    AL_leave_entitled: '10',
    pay_currency: 'HKD',
    basic_salary: '25000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 5, 9/F, Tower 6, Tseung Kwan O Plaza, Tseung Kwan O',
    bank_code: '003',
    bank_name: 'Standard Chartered Bank (Hong Kong) Limited',
    bank_number: '482-201590-990',
    bank_payee: 'Ho Hoi Lam',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO016',
    first_name: 'Hui Tung',
    last_name: 'Chan',
    chinese_name: '陳曉彤',
    alias: 'Sophia',
    HKID: 'X821718(6)',
    gender: 'F',
    nationality: 'China',
    date_of_birth: '18/7/1992',
    age: '30',
    mobile_countrycode: '86',
    mobile_no: '98780468',
    work_phone_no: '28889101',
    email_personal: 'sophiachan@gmail.com',
    email_work: 'hui.tung.chan@company.com',
    highest_education: 'Bachelor',
    institution_name: 'The Hong Kong Polytechnic University',
    major: 'Jewelry and Metalsmithing',
    last_job_company: 'CLP Group',
    last_job_title: 'Sale Executive',
    start_date: '24/7/2020',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'contract',
    job_nature: 'intern',
    notice_period: '15',
    report_to: 11,
    AL_leave_entitled: '0',
    pay_currency: 'HKD',
    basic_salary: '21000',
    payment_method: 'cheque',
    home_address: 'Flat 3, 12/F, Lok Sang House, Kin Sang Estate, Tuen Mun',
    bank_code: '214',
    bank_name: 'Industrial and Commercial Bank of China Limited',
    bank_number: '665-436413-561',
    bank_payee: 'Chan Hui Tung',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO017',
    first_name: 'Tse Ching',
    last_name: 'Lee',
    chinese_name: '李紫晴',
    alias: 'Isabella',
    HKID: 'Y522639(3)',
    gender: 'F',
    nationality: 'UK',
    date_of_birth: '8/1/2000',
    age: '22',
    mobile_countrycode: '44',
    mobile_no: '94177916',
    work_phone_no: '28882566',
    email_personal: 'isabellalee@gmail.com',
    email_work: 'tse.ching.lee@company.com',
    highest_education: 'Bachelor',
    institution_name: 'City University of Hong Kong',
    major: 'Multidisciplinary Studies',
    last_job_company: 'Commercial Radio Hong Kong',
    last_job_title: 'Sale Executive',
    start_date: '18/7/2020',
    have_probation: 'FALSE',
    pass_probation: 'TRUE',
    status: 'contract',
    job_nature: 'temp',
    notice_period: '7',
    report_to: 11,
    AL_leave_entitled: '0',
    pay_currency: 'HKD',
    basic_salary: '18000',
    payment_method: 'cash',
    home_address:
      'Flat 4, 15/F, The Eastborne, 51 Shau Kei Wan Main Street East, Shau Kei Wan',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '193-267727-528',
    bank_payee: 'Lee Tse Ching',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO018',
    first_name: 'Ka Yee',
    last_name: 'Cheung',
    chinese_name: '張嘉怡',
    alias: 'Mia',
    HKID: 'Z818991(8)',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '4/1/1999',
    age: '23',
    mobile_countrycode: '852',
    mobile_no: '91707145',
    work_phone_no: '28883096',
    email_personal: 'miacheung@gmail.com',
    email_work: 'ka.yee.cheung@company.com',
    highest_education: 'Bachelor',
    institution_name: 'Hong Kong Baptist University',
    major: 'Philosophy',
    last_job_company: 'Crocodile Garments',
    last_job_title: 'Sale Executive',
    start_date: '28/9/2021',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'terminated',
    job_nature: 'part_time',
    notice_period: '7',
    report_to: 11,
    AL_leave_entitled: '0',
    pay_currency: 'HKD',
    basic_salary: '18000',
    payment_method: 'cheque',
    home_address: 'Flat 5, 36/F, Block 3, Handsome Court, Tuen Mun',
    bank_code: '024',
    bank_name: 'Hang Seng Bank Limit',
    bank_number: '511-247963-269',
    bank_payee: 'Cheung Ka Yee',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO019',
    first_name: 'Tse Ching',
    last_name: 'Wong',
    chinese_name: '黃梓晴',
    alias: 'Evelyn',
    HKID: 'X800452(3)',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '23/9/2000',
    age: '22',
    mobile_countrycode: '852',
    mobile_no: '54770831',
    work_phone_no: '28881867',
    email_personal: 'evelynwong@gmail.com',
    email_work: 'tse.ching.wong@company.com',
    highest_education: 'Bachelor',
    institution_name: 'Lingnan University',
    major: 'Business',
    last_job_company: 'DBS Bank',
    last_job_title: 'Designer',
    start_date: '23/9/2021',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'resigned',
    job_nature: 'intern',
    notice_period: '7',
    report_to: 12,
    AL_leave_entitled: '0',
    pay_currency: 'HKD',
    basic_salary: '18000',
    payment_method: 'cheque',
    home_address: 'Flat 12, 12/F, Beverley Heights, Belair Gardens, Sha Tin',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '870-892802-209',
    bank_payee: 'Wong Tse Ching',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO020',
    first_name: 'Lok Yiu',
    last_name: 'Ho',
    chinese_name: '何樂瑤',
    alias: 'Harper',
    HKID: 'Y569503(8)',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '16/4/1994',
    age: '28',
    mobile_countrycode: '852',
    mobile_no: '58816049',
    work_phone_no: '28889486',
    email_personal: 'harperho@gmail.com',
    email_work: 'lok.yiu.ho@company.com',
    highest_education: 'Bachelor',
    institution_name: 'The Hong Kong University of Science and Technology',
    major: 'Business',
    last_job_company: 'Esprit Holdings',
    last_job_title: 'Designer',
    start_date: '3/10/2021',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'probation',
    job_nature: 'full_time',
    notice_period: '7',
    report_to: 12,
    AL_leave_entitled: '9',
    pay_currency: 'HKD',
    basic_salary: '25000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 4, 35/F, Block 10, Melody Garden, Tuen Mun',
    bank_code: '024',
    bank_name: 'Hang Seng Bank Limit',
    bank_number: '900-532220-643',
    bank_payee: 'Ho Lok Yiu',
    payment_remark: 'NA',
  });

  await seedRow('employee_role', {
    employeeID: 1,
    department_id: 1,
    team_id: 6,
    grade_id: 1,
    title_id: 1,
  });
  await seedRow('employee_role', {
    employeeID: 2,
    department_id: 1,
    team_id: 6,
    grade_id: 2,
    title_id: 2,
  });
  await seedRow('employee_role', {
    employeeID: 3,
    department_id: 1,
    team_id: 6,
    grade_id: 2,
    title_id: 3,
  });
  await seedRow('employee_role', {
    employeeID: 4,
    department_id: 4,
    team_id: 1,
    grade_id: 3,
    title_id: 4,
  });
  await seedRow('employee_role', {
    employeeID: 5,
    department_id: 4,
    team_id: 1,
    grade_id: 4,
    title_id: 5,
  });
  await seedRow('employee_role', {
    employeeID: 6,
    department_id: 5,
    team_id: 1,
    grade_id: 4,
    title_id: 6,
  });
  await seedRow('employee_role', {
    employeeID: 7,
    department_id: 9,
    team_id: 1,
    grade_id: 4,
    title_id: 7,
  });
  await seedRow('employee_role', {
    employeeID: 8,
    department_id: 9,
    team_id: 6,
    grade_id: 5,
    title_id: 7,
  });
  await seedRow('employee_role', {
    employeeID: 9,
    department_id: 5,
    team_id: 1,
    grade_id: 5,
    title_id: 9,
  });
  await seedRow('employee_role', {
    employeeID: 10,
    department_id: 9,
    team_id: 1,
    grade_id: 5,
    title_id: 10,
  });
  await seedRow('employee_role', {
    employeeID: 11,
    department_id: 4,
    team_id: 1,
    grade_id: 5,
    title_id: 11,
  });
  await seedRow('employee_role', {
    employeeID: 12,
    department_id: 5,
    team_id: 1,
    grade_id: 5,
    title_id: 12,
  });
  await seedRow('employee_role', {
    employeeID: 13,
    department_id: 9,
    team_id: 1,
    grade_id: 6,
    title_id: 13,
  });
  await seedRow('employee_role', {
    employeeID: 14,
    department_id: 5,
    team_id: 1,
    grade_id: 6,
    title_id: 14,
  });
  await seedRow('employee_role', {
    employeeID: 15,
    department_id: 5,
    team_id: 2,
    grade_id: 6,
    title_id: 15,
  });
  await seedRow('employee_role', {
    employeeID: 16,
    department_id: 4,
    team_id: 1,
    grade_id: 6,
    title_id: 16,
  });
  await seedRow('employee_role', {
    employeeID: 17,
    department_id: 4,
    team_id: 2,
    grade_id: 6,
    title_id: 16,
  });
  await seedRow('employee_role', {
    employeeID: 18,
    department_id: 4,
    team_id: 2,
    grade_id: 6,
    title_id: 16,
  });
  await seedRow('employee_role', {
    employeeID: 19,
    department_id: 5,
    team_id: 1,
    grade_id: 6,
    title_id: 19,
  });
  await seedRow('employee_role', {
    employeeID: 20,
    department_id: 5,
    team_id: 2,
    grade_id: 6,
    title_id: 20,
  });
}
