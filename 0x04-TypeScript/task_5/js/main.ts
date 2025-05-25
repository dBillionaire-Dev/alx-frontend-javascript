// Branded interfaces to uniquely identify MajorCredits and MinorCredits
export interface MajorCredits {
  credits: number;
  brand: 'major';  // unique brand
}

export interface MinorCredits {
  credits: number;
  brand: 'minor';  // unique brand
}

// Function to sum two MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',
  };
}

// Function to sum two MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',
  };
}
