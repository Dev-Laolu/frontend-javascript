// task_5/js/main.ts

// Interface for MajorCredits with a unique brand
export interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits'; // This is the brand
}

// Interface for MinorCredits with a unique brand
export interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits'; // This is the brand
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  // We return a new object and cast it to the MajorCredits type
  return {
    credits: subject1.credits + subject2.credits
  } as MajorCredits;
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits
  } as MinorCredits;
}

// --- Example Usage ---

// We create objects and "brand" them by casting
const major1 = { credits: 3 } as MajorCredits;
const major2 = { credits: 4 } as MajorCredits;

const minor1 = { credits: 1 } as MinorCredits;
const minor2 = { credits: 2 } as MinorCredits;

// This works
const majorSum = sumMajorCredits(major1, major2);
console.log('Major Credits Sum:', majorSum); // { credits: 7 }

// This works
const minorSum = sumMinorCredits(minor1, minor2);
console.log('Minor Credits Sum:', minorSum); // { credits: 3 }

// This line would (correctly) cause a TypeScript error:
// const mixedSum = sumMajorCredits(major1, minor1);