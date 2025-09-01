'use client';
import { incrementViews } from '@/lib/actions';
import { useEffect, useRef } from 'react';

const IncrementViews = ({ id }: { id: string }) => {
  const hasIncremented = useRef(false);
  useEffect(() => {
    if (!hasIncremented.current) {
      incrementViews(id);
      hasIncremented.current = true;
    }
  }, [id]);
  return null;
};

export default IncrementViews;
