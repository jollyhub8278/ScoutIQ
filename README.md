# ScoutIQ — Athlete Discovery App

A React Native (Expo) app for sports talent scouts to browse athletes, view profiles, and manage a shortlist.

## How to Run

```bash
git clone https://github.com/YOUR_USERNAME/scoutiq
cd scoutiq
npm install
npx expo start
```

Then scan the QR code with Expo Go (iOS/Android).

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

- Claude AI (Anthropic) — for code structure guidance