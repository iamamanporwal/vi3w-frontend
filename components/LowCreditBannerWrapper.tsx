"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { getDb } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { LowCreditBanner } from "./LowCreditBanner";
import { ContactModal } from "./ContactModal";

export function LowCreditBannerWrapper() {
  const { user } = useAuth();
  const [credits, setCredits] = useState<number | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const fetchCredits = async () => {
      if (!user) {
        setCredits(null);
        return;
      }

      try {
        const userDoc = await getDoc(doc(getDb(), 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setCredits(userData?.credits || 0);
        } else {
          setCredits(0);
        }
      } catch (error) {
        console.error("Error fetching credits for banner:", error);
        setCredits(null);
      }
    };

    fetchCredits();
    
    // Refresh credits periodically (every 30 seconds)
    const interval = setInterval(fetchCredits, 30000);
    return () => clearInterval(interval);
  }, [user]);

  // Only show banner if user is logged in and credits are available
  if (!user || credits === null) {
    return null;
  }

  return (
    <>
      <LowCreditBanner 
        credits={credits} 
        onContactClick={() => setIsContactModalOpen(true)}
      />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}

