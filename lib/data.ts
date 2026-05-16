export const projects = [
  { id:'taskops', title:'TaskOps — Multi-Tenant API', desc:'Multi-tenant REST API with isolated org data, RBAC, JWT auth, and full task workflow endpoints. PostgreSQL with Alembic migrations.', stack:['Python','FastAPI','PostgreSQL','Docker','GitHub Actions','pytest'], cat:'backend', github:'https://github.com/Maherimtiyaz/Task-Manager-API', icon:'⚡', featured:true },
  { id:'chat', title:'Real-Time Chat Backend', desc:'Async WebSocket messaging backend with multi-room concurrent connections, JWT-authenticated handshakes, and optimized PostgreSQL persistence.', stack:['FastAPI','WebSockets','PostgreSQL','Docker','pytest'], cat:'backend', github:'https://github.com/Maherimtiyaz/Chat_Backend', icon:'💬', featured:true },
  { id:'auth', title:'Auth & Authorization Service', desc:'Stateless JWT auth service with bcrypt hashing and RBAC — pluggable module for microservice architectures. Full OWASP compliance.', stack:['Python','JWT','bcrypt','PostgreSQL','pytest','OWASP'], cat:'backend', github:'https://github.com/Maherimtiyaz/Authentication-Service', icon:'🔐', featured:true },
  { id:'appt', title:'Appointment Scheduling API', desc:'Role-based REST API with conflict-detection scheduling logic at the database layer — prevents double-bookings without application-level locking.', stack:['Node.js','Express','MongoDB','REST API'], cat:'backend', github:'https://github.com/Maherimtiyaz/Appointment-System-API', icon:'📅', featured:false },
  { id:'ai', title:'AI Chatbot Backend API', desc:'Backend layer for LLM-powered chatbot — prompt routing, response streaming, and session management. Exploring backend patterns for AI applications.', stack:['Python','FastAPI','LLM','Streaming'], cat:'ai', github:'https://github.com/Maherimtiyaz/AI_ChatBot_Backend_API', icon:'🤖', featured:false },
  { id:'oss', title:'Open Source Contributions', desc:'Actively contributing PRs to FastAPI, Starlette, and the broader Python ecosystem. Every contribution documented with technical learnings.', stack:['FastAPI','Starlette','Python','Open Source'], cat:'backend', github:'https://github.com/Maherimtiyaz', icon:'🌱', featured:false },
]

export const skills = [
  { cat:'Backend',      items:[{n:'Python',v:90},{n:'FastAPI',v:88},{n:'REST APIs',v:90},{n:'WebSockets',v:78},{n:'JWT / RBAC',v:85}] },
  { cat:'Databases',    items:[{n:'PostgreSQL',v:85},{n:'MongoDB',v:75},{n:'SQLAlchemy',v:78},{n:'SQL',v:82}] },
  { cat:'DevOps',       items:[{n:'Docker',v:80},{n:'GitHub Actions',v:75},{n:'pytest',v:80},{n:'Git / Linux',v:85}] },
  { cat:'AI / ML',      items:[{n:'Python for AI',v:75},{n:'Machine Learning',v:65},{n:'LLM Integration',v:68},{n:'Prompt Eng.',v:70}] },
]

export const experience = [
  {
    role:'Independent Backend Engineer', company:'Self-Directed', period:'2025 – Present', location:'Remote', type:'work',
    bullets:['Shipped 4 production-oriented backend systems in Python and Node.js — real-time, auth, multi-tenant task management, scheduling','Applied OWASP security standards across all projects — input validation, bcrypt hashing, JWT lifecycle management','Docker + GitHub Actions CI/CD pipelines across multiple projects, enabling automated test execution','Building in public: sharing architecture decisions on LinkedIn and GitHub weekly'],
    stack:['Python','FastAPI','PostgreSQL','Docker','Node.js'],
  },
  {
    role:'Open Source Contributor', company:'FastAPI / Python Ecosystem', period:'2025 – Present', location:'Remote', type:'oss',
    bullets:['Contributing PRs to FastAPI, Starlette, and Python tooling','Documenting learnings publicly — every PR includes technical rationale','Engaging with maintainers and the broader Python backend community'],
    stack:[],
  },
  {
    role:'Bachelor of Computer Applications', company:'Vivekananda Global University', period:'2025 – 2028', location:'Jaipur, India', type:'edu',
    bullets:['Specializing in backend systems and applied computer science','Parallel self-study in ML, system design, and distributed systems'],
    stack:[],
  },
]
