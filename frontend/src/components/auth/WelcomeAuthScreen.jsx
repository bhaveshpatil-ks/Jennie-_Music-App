import React, { useState } from 'react';
import { 
  Music, 
  ArrowRight, 
  Lock, 
  Mail, 
  User, 
  Eye, 
  EyeOff, 
  AlertCircle
} from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { MOCK_TRACKS, getTrackCoverUrl } from '../../data/mockTracks';

export const WelcomeAuthScreen = ({ onEnterGuest }) => {
  const { login, register, authActionLoading, error, clearError } = useAuthStore();

  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState('');

  // Sample album artworks for the background floating collage
  const showcaseTracks = MOCK_TRACKS.slice(0, 6);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');
    clearError();

    if (!email.trim() || !password.trim()) {
      setLocalError('Please enter both your email and password.');
      return;
    }

    if (password.length < 6) {
      setLocalError('Password must be at least 6 characters.');
      return;
    }

    if (mode === 'register') {
      const res = await register(
        email.trim(),
        password.trim(),
        username.trim() || email.split('@')[0],
        '2000-01-01',
        'prefer-not-to-say'
      );
      if (res && res.success) {
        // Registered and logged in
      }
    } else {
      const success = await login(email.trim(), password.trim());
      if (success) {
        // Logged in
      }
    }
  };

  const handleGuestClick = () => {
    try {
      localStorage.setItem('jennie_guest_session', 'true');
    } catch (_) {}
    if (onEnterGuest) onEnterGuest();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#070708] flex flex-col justify-between overflow-y-auto selection:bg-neutral-700 selection:text-white">
      {/* Ambient background glow */}
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed -bottom-40 right-10 w-[500px] h-[400px] bg-gradient-to-t from-neutral-800/20 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Top Navbar */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center shadow-lg font-black">
            <Music size={20} className="fill-black" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-serif">
            Jennie
          </span>
        </div>

        <button
          type="button"
          onClick={handleGuestClick}
          className="text-xs sm:text-sm font-semibold text-neutral-400 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/5 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span>Explore as Guest</span>
          <ArrowRight size={14} />
        </button>
      </header>

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-10 flex flex-col lg:flex-row items-center justify-between gap-10 my-auto">
        {/* Left Column: Hero branding */}
        <div className="space-y-6 max-w-lg text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-white tracking-tight leading-[1.08]">
            Millions of songs. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
              Free on Jennie.
            </span>
          </h1>

          {/* Showcase Mini Posters Carousel / Grid */}
          <div className="pt-3 hidden sm:flex items-center justify-center lg:justify-start gap-2.5 overflow-hidden">
            {showcaseTracks.map((t) => (
              <img
                key={t.id}
                src={getTrackCoverUrl(t)}
                alt={t.title}
                className="w-12 h-12 rounded-xl object-cover border border-white/10 shadow-md hover:scale-110 transition-transform"
                title={`${t.title} by ${t.artist}`}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Sleek Auth Form Box */}
        <div className="w-full max-w-md bg-[#121214] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          {/* Mode Switcher Tabs */}
          <div className="flex p-1 rounded-2xl bg-white/5 mb-6 border border-white/5">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setLocalError('');
                clearError();
              }}
              className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                mode === 'login'
                  ? 'bg-white text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('register');
                setLocalError('');
                clearError();
              }}
              className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                mode === 'register'
                  ? 'bg-white text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Error Banner */}
          {(localError || error) && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle size={15} className="flex-shrink-0 text-red-400" />
              <span>{localError || error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Your Name / Username
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors cursor-pointer"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={authActionLoading}
              className="w-full py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-sm transition-all shadow-xl active:scale-[0.98] disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              {authActionLoading ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>{mode === 'login' ? 'Sign In to Jennie' : 'Create Free Account'}</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Guest Pass Subtext */}
          <div className="mt-5 pt-4 border-t border-white/5 text-center">
            <button
              type="button"
              onClick={handleGuestClick}
              className="text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Don&apos;t want to sign in yet?{' '}
              <span className="underline text-white font-medium">Continue as Guest</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-5 py-4 text-center text-xs text-neutral-500">
        Jennie Music • High-fidelity streaming powered by YouTube Official Embeds
      </footer>
    </div>
  );
};
