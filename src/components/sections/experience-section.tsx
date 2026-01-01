import { ScrollFadeIn } from '../common/scroll-fade-in';
import { ProjectCard } from '../common/project-card';

const experiences = [
  {
    icon: '🚀',
    title: 'AI/ML Engineer',
    company: 'Kahana Inc | Aug 2025 – Present',
    description: 'Built a voice-first browsing layer on top of Firefox, enabling users to talk to the browser for navigation and task completion (shopping, job applications, search) instead of manual clicking/typing. Implemented an AWS Lambda–hosted GenAI gateway to securely run Deepgram (speech-to-text) and Gemini (intent + reasoning) while isolating API credentials from the client. Added semantic + request-level caching (Redis) to reduce duplicate LLM calls and stabilize performance. Created and tested a multi-agent orchestration system using Google ADK, decomposing workflows into specialized sub-agents with routing + handoffs for multi-step tasks. Implemented structured reasoning + tool-use guardrails (ReAct-style planning/execution) with retrieval/tool validation to reduce off-target responses. Integrated MCP (Model Context Protocol) to standardize tool connectivity and context exchange between the browser layer, agents, and external services.',
    stats: [
      { label: 'Voice-First Browser' },
      { label: 'Multi-Agent System' },
      { label: 'Secure GenAI Gateway' },
    ],
    tech: ['Python', 'AWS Lambda', 'FastAPI', 'WebSockets', 'Deepgram API', 'Gemini', 'Redis', 'Google ADK', 'MCP', 'Docker', 'AWS S3', 'CloudWatch', 'Cognito'],
  },
  {
    icon: '🔬',
    title: 'Machine Learning Engineer',
    company: 'COMET Lab, Indiana University | Aug 2024 – May 2025',
    description: 'Built an end-to-end Natural Language → SQL Q&A system by cleaning web-scraped CSV datasets, loading them into a SQL database, and using LangChain + Llama-3.3-70B-Versatile to generate SQL, execute and return results to users. Implemented embedding-based retrieval and stored vectors in a local ChromaDB to fetch relevant context (schema snippets, table/column descriptions) before generation—improving grounding and reducing ambiguous-field errors. Implemented schema-aware RAG by injecting relevant tables/columns + schema context into prompts, improving overall SQL generation performance. Improved SQL execution accuracy from 78% → 92% through iterative prompt engineering (one-shot/few-shot exemplars) and structured planning + tool-use prompting (ReAct-style) for complex joins and multi-step analytical questions. Added read-only guardrails (validation + blocklist/allowlist) to prevent destructive statements and ensure safe execution. Built a post-training evaluation harness with 60+ ground-truth test cases, reporting Execution Accuracy and Exact Match.',
    stats: [
      { label: '78% → 92% Accuracy' },
      { label: 'Schema-Aware RAG' },
      { label: '60+ Test Cases' },
    ],
    tech: ['Python', 'SQL', 'LangChain', 'ChromaDB', 'Embeddings', 'Llama-3.3-70B-Versatile', 'RAG', 'Evaluation', 'Guardrails', 'HITL'],
  },
  {
    icon: '📊',
    title: 'Jr Machine Learning Engineer',
    company: 'Virgenverse | Feb 2022 – Nov 2023',
    description: 'Engineered resilient ETL pipelines using Apache Airflow + Python, reducing data refresh latency by 40% and ensuring T+1 data availability to support downstream ML training and reporting. Built a sentiment analytics pipeline with spaCy/NLTK to process 100K+ social/customer posts, generating actionable insights and dashboards for marketing teams. Designed and executed A/B and multivariate experiments to optimize pricing and marketing initiatives, improving conversion rates. Optimized data warehousing in Snowflake by migrating legacy stored procedures into efficient SQL transformations, improving BI/dashboard query performance by 3× and reducing operational complexity. Improved data quality and reliability with validation checks, retry logic, and lineage-friendly logging, reducing pipeline failures and speeding up root-cause analysis.',
    stats: [
      { label: '40% Latency Reduction' },
      { label: '3× Query Performance' },
      { label: '100K+ Posts Processed' },
    ],
    tech: ['Python', 'Apache Airflow', 'SQL', 'Snowflake', 'spaCy', 'NLTK', 'BI Dashboards'],
  },
];


export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <ScrollFadeIn>
          <h2 className="section-title text-center">Professional Experience</h2>
        </ScrollFadeIn>
        <div className="projects-grid grid-cols-1">
          {experiences.map((exp, i) => (
            <ScrollFadeIn key={i}>
                <div className="mb-8">
                    <ProjectCard {...exp} />
                </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
