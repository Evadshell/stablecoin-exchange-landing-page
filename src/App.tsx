import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Globe2, Zap, Shield, DollarSign, Wallet, ArrowRight } from 'lucide-react';
import { Globe } from './components/Globe';
import { PaymentForm } from './components/PaymentForm';
import { TransactionHistory } from './components/TransactionHistory';

function App() {
  return (
    <div className="min-h-screen text-gray-100">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950" />
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%), 
                             radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Hero Section */}
      <header className="relative">
        <nav className="container mx-auto px-6 py-6">
          <div className="glass rounded-2xl p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Globe2 className="h-8 w-8 text-indigo-400" />
              <span className="text-2xl font-bold gradient-text">SolanaPay</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-indigo-400 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-indigo-400 transition-colors">How it Works</a>
              <a href="#payments" className="text-gray-300 hover:text-indigo-400 transition-colors">Payments</a>
            </div>
            <button className="glass px-6 py-2 rounded-xl hover:glow transition-all duration-300 text-indigo-300 border border-indigo-500/20">
              Connect Wallet
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-6xl font-bold mb-6">
                <span className="gradient-text">Borderless</span> Payments
                <br />on <span className="gradient-text">Solana</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Experience the future of cross-border transactions. Lightning-fast, secure, and powered by Solana blockchain.
              </p>
              <div className="flex space-x-4">
                <button className="bg-indigo-600 px-8 py-3 rounded-xl hover:glow transition-all duration-300 flex items-center space-x-2">
                  <span>Launch App</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="glass px-8 py-3 rounded-xl hover:glow transition-all duration-300 text-indigo-300 border border-indigo-500/20">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[400px]">
              <div className="absolute inset-0">
                <Canvas camera={{ position: [0, 0, 3] }}>
                  <Suspense fallback={null}>
                    <Globe />
                  </Suspense>
                </Canvas>
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl border border-indigo-500/20">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm">Network Status: Operational</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 glass p-4 rounded-xl border border-indigo-500/20">
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-indigo-400" />
                  <span className="text-sm">50,000+ Transactions/day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20" id="features">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Revolutionary</span> Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="h-8 w-8 text-indigo-400" />}
              title="Lightning Fast"
              description="Complete transactions in seconds, not days. Powered by Solana's ultra-fast blockchain."
            />
            <FeatureCard 
              icon={<DollarSign className="h-8 w-8 text-indigo-400" />}
              title="Minimal Fees"
              description="Save up to 90% on transaction fees compared to traditional banking systems."
            />
            <FeatureCard 
              icon={<Shield className="h-8 w-8 text-indigo-400" />}
              title="Bank-Grade Security"
              description="Enterprise-level security with the transparency of blockchain technology."
            />
          </div>
        </div>
      </section>

      {/* Payments Section */}
      <section className="py-20" id="payments">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Seamless</span> Payments
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <PaymentForm />
            <TransactionHistory />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass rounded-2xl p-12 text-center grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">$100M+</div>
              <div className="text-gray-400">Transaction Volume</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">160+</div>
              <div className="text-gray-400">Countries Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-8">
                Ready to Experience the Future of Payments?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of users who trust SolanaPay for their cross-border transactions.
              </p>
              <button className="bg-indigo-600 px-8 py-3 rounded-xl hover:glow transition-all duration-300 flex items-center space-x-2 mx-auto">
                <Wallet className="h-5 w-5" />
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="container mx-auto px-6">
          <div className="glass rounded-2xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex items-center space-x-2 mb-8 md:mb-0">
                <Globe2 className="h-8 w-8 text-indigo-400" />
                <span className="text-2xl font-bold gradient-text">SolanaPay</span>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Terms</a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Support</a>
              </div>
            </div>
            <div className="text-center text-gray-500">
              © 2024 SolanaPay. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="glass rounded-xl p-6 hover:glow transition-all duration-300 border border-indigo-500/20">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 gradient-text">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;