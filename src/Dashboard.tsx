
import { useState } from 'react';
import {
  BrainCircuit, LayoutDashboard, Files, Network,
  Search, ShieldCheck, Settings, Bell, UploadCloud,
  FileText, Activity, Sparkles, ArrowUpRight,
  ChevronRight,  Zap, Clock3
} from 'lucide-react';

const navigation = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Documents', icon: Files },
  { label: 'Knowledge Graph', icon: Network },
  { label: 'AI Intelligence', icon: BrainCircuit },
  { label: 'Evidence Explorer', icon: ShieldCheck }
];

function Dashboard() {
  const [active, setActive] = useState('Overview');
  const [files, setFiles] = useState<string[]>([]);

  const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files || []);
    setFiles(previous => [
      ...previous,
      ...selected.map(file => file.name)
    ]);
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">
            <BrainCircuit size={24} />
          </div>
          <div>
            <h2>EVIDENCE<span>X</span></h2>
            <small>INTELLIGENCE SYSTEM</small>
          </div>
        </div>

        <div className="workspace-label">WORKSPACE</div>

        <nav>
          {navigation.map(item => (
            <button
              key={item.label}
              className={active === item.label ? 'nav-item active' : 'nav-item'}
              onClick={() => setActive(item.label)}
            >
              <item.icon size={19} />
              <span>{item.label}</span>
              {active === item.label && <span className="nav-dot" />}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="system-status">
            <span className="status-dot" />
            SYSTEM OPERATIONAL
          </div>
          <button className="nav-item">
            <Settings size={19} />
            Settings
          </button>
          <div className="profile">
            <div className="avatar">EX</div>
            <div>
              <strong>Research Workspace</strong>
              <small>Personal account</small>
            </div>
          </div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumb">
            Workspace <ChevronRight size={14} />
            <strong>{active}</strong>
          </div>
          <div className="top-actions">
            <div className="search-box">
              <Search size={16} />
              <span>Search intelligence...</span>
              <kbd>⌘ K</kbd>
            </div>
            <button className="icon-button">
              <Bell size={19} />
            </button>
          </div>
        </header>

        <section className="dashboard-content">
          <div className="welcome-row">
            <div>
              <div className="eyebrow">
                <Sparkles size={14} /> INTELLIGENCE WORKSPACE
              </div>
              <h1>Discover what lies <span>between the data.</span></h1>
              <p>
                Transform scattered documents into connected,
                evidence-backed intelligence.
              </p>
            </div>
            <div className="date-chip">
              <Activity size={15} /> LIVE WORKSPACE
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-heading">
                DOCUMENTS <Files size={18} />
              </div>
              <h2>{files.length.toString().padStart(2, '0')}</h2>
              <p>Uploaded to workspace</p>
            </div>
            <div className="stat-card">
              <div className="stat-heading">
                AI INSIGHTS <BrainCircuit size={18} />
              </div>
              <h2>--</h2>
              <p>Awaiting analysis</p>
            </div>
            <div className="stat-card">
              <div className="stat-heading">
                CONNECTIONS <Network size={18} />
              </div>
              <h2>--</h2>
              <p>Knowledge relationships</p>
            </div>
            <div className="stat-card">
              <div className="stat-heading">
                SYSTEM STATUS <Zap size={18} />
              </div>
              <h2 className="status-text">READY</h2>
              <p>Workspace initialized</p>
            </div>
          </div>

          <div className="section-heading">
            <div>
              <h2>Intelligence workspace</h2>
              <p>Manage your evidence and begin discovering insights.</p>
            </div>
            <span className="live-indicator">● ACTIVE SESSION</span>
          </div>

          <div className="workspace-grid">
            <div className="upload-card">
              <div className="card-top">
                <div>
                  <span className="eyebrow">DOCUMENT INGESTION</span>
                  <h3>Bring your knowledge together.</h3>
                  <p>Upload documents to begin your intelligence workflow.</p>
                </div>
                <UploadCloud size={27} />
              </div>

              <label className="drop-zone">
                <input
                  type="file"
                  multiple
                  accept=".pdf,.docx,.txt,.csv,.xlsx,.json,.png,.jpg,.jpeg"
                  onChange={handleFiles}
                />
                <UploadCloud size={35} />
                <strong>Drop your files here</strong>
                <span>or click to browse your computer</span>
                <small>PDF · DOCX · CSV · XLSX · TXT · IMAGES</small>
              </label>

              <div className="uploaded-files">
                <div className="uploaded-heading">
                  <span>UPLOADED FILES</span>
                  <span>{files.length} FILES</span>
                </div>
                {files.length === 0 ? (
                  <div className="empty-files">
                    Your workspace is waiting for its first document.
                  </div>
                ) : (
                  files.map((file, index) => (
                    <div className="file-row" key={index}>
                      <FileText size={17} />
                      <span>{file}</span>
                      <span className="file-ready">ADDED</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="insight-card">
              <div className="insight-header">
                <div className="insight-icon">
                  <Sparkles size={19} />
                </div>
                <span>AI INTELLIGENCE ENGINE</span>
              </div>
              <h3>Every document has a story. Discover the connections.</h3>
              <p>
                Your AI workspace will analyze documents,
                discover relationships and connect insights
                to their original evidence.
              </p>
              <div className="feature-list">
                <div><ShieldCheck size={16} /> Evidence-grounded answers</div>
                <div><Network size={16} /> Cross-document relationships</div>
                <div><Search size={16} /> Contextual information retrieval</div>
              </div>
              <button
                className="primary-button"
                onClick={() => setActive('AI Intelligence')}
              >
                Explore intelligence <ArrowUpRight size={17} />
              </button>
            </div>
          </div>

          <div className="bottom-grid">
            <div className="bottom-card">
              <div className="section-heading">
                <div>
                  <h3>Knowledge graph</h3>
                  <p>Explore relationships across your documents.</p>
                </div>
                <Network size={20} />
              </div>
              <div className="graph-placeholder">
                <div className="graph-orbit orbit-one" />
                <div className="graph-orbit orbit-two" />
                <div className="graph-node node-center">
                  <BrainCircuit size={25} />
                </div>
                <div className="graph-node node-left"><Files size={17} /></div>
                <div className="graph-node node-right"><Zap size={17} /></div>
                <div className="graph-node node-bottom"><ShieldCheck size={17} /></div>
                <span className="graph-label">KNOWLEDGE NETWORK</span>
              </div>
            </div>

            <div className="bottom-card activity-card">
              <div className="section-heading">
                <div>
                  <h3>Recent activity</h3>
                  <p>Workspace events</p>
                </div>
                <Clock3 size={19} />
              </div>
              <div className="activity-empty">
                <Activity size={24} />
                <span>No activity yet</span>
                <small>Upload a document to get started.</small>
              </div>
            </div>
          </div>

          <footer>
            EVIDENCE X <span>·</span> MULTI-DOCUMENT INTELLIGENCE PLATFORM
            <span className="footer-version">EARLY DEVELOPMENT BUILD</span>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
