# ScoutIQ — Athlete Discovery App

A React Native (Expo) app for sports talent scouts to browse athletes, view profiles, and manage a shortlist.
    
<img width="200" height="400" alt="image" src="https://github.com/user-attachments/assets/5acc4af0-1ed0-4341-9559-9fab666d1097" />    
<img width="200" height="400" alt="image" src="https://github.com/user-attachments/assets/f66a21c7-5218-4bca-b6eb-496466217931" />    
<img width="200" height="400" alt="image" src="https://github.com/user-attachments/assets/a48b0374-285f-4ffd-a002-0f1f8ebed6c5" />

## How to Run

```bash
git clone https://github.com/jollyhub8278/ScoutIQ.git
cd ScoutIQ
npm install
npx expo start
```

Then scan the QR code with Expo Go (iOS/Android).
[I'd suggest to use Android Emulator as the latest version of expo go is not available on App/Play Store currently.]

## Key Decisions

- **Context API over Redux** — app state is simple (one shortlist array); Redux would be overkill.
- **No avatar images** — used initials with sport-colored backgrounds; keeps app offline and avoids asset management.
- **Score derived at data layer** — score is the average of all stat values, computed in `athletes.ts`.
- **Debounce via useRef** — stored timer in a ref (not state) so it doesn't trigger unnecessary re-renders.
- **Custom ProgressBar** — built from scratch with View width as `${percentage}%` as required.

## What's Incomplete

- Swipe-to-delete on Shortlist screen (used Remove button instead — fully functional, just less gesturally polished).

## What I'd Do Differently

With more time: add swipe-to-delete using `react-native-gesture-handler`, and add sorting (by score, age) on the Discover feed.

## Tools Used

- Claude AI — for code structure guidance
