import './App.css'

function App() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="logo">Kai Fit</h1>
        <div className="divider"></div>
        <h2 className="subtitle">Coming Soon</h2>
        <p className="description">
          Your personal fitness companion is on the way. Kai Fit will help you
          track your workouts, monitor your progress, and achieve your fitness goals
          with personalized training plans and insights.
        </p>
        <div className="features">
          <div className="feature">
            <span className="icon">💪</span>
            <span>Personalized Workouts</span>
          </div>
          <div className="feature">
            <span className="icon">📊</span>
            <span>Progress Tracking</span>
          </div>
          <div className="feature">
            <span className="icon">🎯</span>
            <span>Goal Setting</span>
          </div>
        </div>
        <p className="stay-tuned">Stay tuned for updates!</p>
      </div>
    </div>
  )
}

export default App
