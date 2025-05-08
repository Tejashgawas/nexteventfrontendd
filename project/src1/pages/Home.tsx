import React from 'react';
import Hero from '../components/Hero';
import EventTypes from '../components/EventTypes';
import Recommendations from '../components/Recommendations';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

import { supabase } from '../lib/supabase';
import { useAuth } from '../providers/AuthProvider';

const testSupabaseConnection = async () => {
  const { data, error } = await supabase.from('venues').select().limit(1);
  
  if (error) {
    console.error('❌ Supabase connection error:', error);
  } else {
    console.log('✅ Supabase connected! Sample data:', data);
  }
};

testSupabaseConnection();

// {isLoggedIn ? (
//   <>
//     <span>Welcome, {user.email}</span>
//     <button onClick={signOut}>Logout</button>
//   </>
// ) : (
//   <a href="/login">Login</a>
// )}
const Home: React.FC = () => {
  // const { isLoggedIn, user, signOut } = useAuth();
  return (

    <div>
      <Hero />
      <EventTypes />
      <Recommendations eventType="wedding" />
      <Features />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;