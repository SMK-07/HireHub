const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();
async function main() {
  console.log('Start seeding...');
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('password123', salt);
  console.log('Cleaning database...');
  await prisma.application.deleteMany({});
  await prisma.job.deleteMany({});
  await prisma.studentProfile.deleteMany({});
  await prisma.company.deleteMany({});
  await prisma.user.deleteMany({});
  console.log('Database cleaned.');


  console.log('Creating companies...');
  const techCorp = await prisma.company.create({
    data: {
      name: 'TechCorp Solutions',
      description: 'A leading innovator in cloud computing and AI solutions.',
      website: 'https://techcorp.example.com',
      logoUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=TechCorp',
      isVerified: true,
    },
  });

  const innovateInc = await prisma.company.create({
    data: {
      name: 'Innovate Inc.',
      description: 'A fast-growing startup in the FinTech space.',
      website: 'https://innovate.example.com',
      logoUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Innovate',
      isVerified: true,
    },
  });
  
  const mechWorks = await prisma.company.create({
    data: {
        name: 'MechWorks Engineering',
        description: 'Pioneers in mechanical and automotive engineering solutions.',
        website: 'https://mechworks.example.com',
        logoUrl: 'https://via.placeholder.com/150/008000/FFFFFF?text=MechWorks',
        isVerified: true,
    },
  });
  console.log('Companies created.');


  console.log('Creating users...');
  const tpoUser = await prisma.user.create({
    data: {
      email: 'tpo@college.ac.in',
      password: hashedPassword,
      name: 'Dr. Placement Head',
      role: 'TPO',
      isVerified: true,
    },
  });

  const recruiterTechCorp = await prisma.user.create({
    data: {
      email: 'recruiter@techcorp.com',
      password: hashedPassword,
      name: 'HR TechCorp',
      role: 'RECRUITER',
      isVerified: true,
      companyId: techCorp.id,
    },
  });
  
  const recruiterMechWorks = await prisma.user.create({
    data: {
        email: 'recruiter@mechworks.com',
        password: hashedPassword,
        name: 'HR MechWorks',
        role: 'RECRUITER',
        isVerified: true,
        companyId: mechWorks.id,
    },
  });

  const studentAnjali = await prisma.user.create({
    data: {
      email: 'anjali.cs@college.ac.in',
      password: hashedPassword,
      name: 'Anjali Sharma',
      role: 'STUDENT',
      isVerified: true,
    },
  });

  const studentRohan = await prisma.user.create({
    data: {
      email: 'rohan.mech@college.ac.in',
      password: hashedPassword,
      name: 'Rohan Verma',
      role: 'STUDENT',
      isVerified: true,
    },
  });
  
  const studentPriya = await prisma.user.create({
    data: {
      email: 'priya.ece@college.ac.in',
      password: hashedPassword,
      name: 'Priya Patel',
      role: 'STUDENT',
      isVerified: true,
    },
  });
  console.log('Users created.');
  console.log('Creating student profiles...');
  await prisma.studentProfile.create({
    data: {
      userId: studentAnjali.id,
      contactNumber: '9876543210',
      course: 'B.Tech',
      branch: 'Computer Science',
      yearOfPassing: 2026,
      cgpa: 8.8,
      skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      projects: [{ title: 'Placement Portal', description: 'A web app for campus placements.' }],
    },
  });
  
  await prisma.studentProfile.create({
    data: {
      userId: studentRohan.id,
      contactNumber: '8765432109',
      course: 'B.Tech',
      branch: 'Mechanical',
      yearOfPassing: 2026,
      cgpa: 7.9,
      skills: ['AutoCAD', 'SolidWorks', 'MATLAB', 'Thermodynamics'],
      internships: [{ company: 'MechWorks Engineering', role: 'Summer Intern', duration: '2 months' }],
    },
  });
  
  await prisma.studentProfile.create({
    data: {
      userId: studentPriya.id,
      contactNumber: '7654321098',
      course: 'B.Tech',
      branch: 'Electronics and Communication',
      yearOfPassing: 2026,
      cgpa: 9.2,
      skills: ['VHDL', 'Verilog', 'Embedded C', 'IoT'],
    },
  });
  console.log('Student profiles created.');


  console.log('Creating jobs...');
  const jobSDE = await prisma.job.create({
    data: {
      title: 'Software Development Engineer',
      description: 'Seeking a talented SDE to build scalable software solutions.',
      ctc: 15.0,
      location: 'Pune, Maharashtra',
      role: 'Full-time',
      companyId: techCorp.id,
      eligibilityCriteria: { minCgpa: 8.0, allowedBranches: ['Computer Science', 'Electronics and Communication'] },
    },
  });
  
  const jobGraduateEngineer = await prisma.job.create({
    data: {
      title: 'Graduate Engineer Trainee',
      description: 'Opportunity for mechanical engineers to work on cutting-edge projects.',
      ctc: 8.5,
      location: 'Pune, Maharashtra',
      role: 'Full-time',
      companyId: mechWorks.id,
      eligibilityCriteria: { minCgpa: 7.5, allowedBranches: ['Mechanical'] },
    },
  });
  console.log('Jobs created.');


  console.log('Creating applications...');
  await prisma.application.create({
    data: {
      studentId: studentAnjali.id,
      jobId: jobSDE.id,
      status: 'APPLIED',
    },
  });

  await prisma.application.create({
    data: {
      studentId: studentPriya.id,
      jobId: jobSDE.id,
      status: 'SHORTLISTED',
    },
  });

  await prisma.application.create({
    data: {
      studentId: studentRohan.id,
      jobId: jobGraduateEngineer.id,
      status: 'OFFERED',
    },
  });
  console.log('Applications created.');
  
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });