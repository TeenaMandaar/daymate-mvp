# Daymate — Product Requirements Document (PRD)
### Version 1.0 | MVP Submission | May 2026

---

## 1. Executive Summary

**Daymate** is India's first curated, activity-first hangout platform that connects individuals with verified companions for strictly platonic, real-world experiences at public venues.

Unlike dating apps that begin with profile browsing, Daymate starts with the activity. A user picks what they want to do — watch a movie, grab coffee, or catch a comedy show — and Daymate matches them with a manually verified companion who is genuinely interested in joining them.

The platform is designed for the 18–35 urban demographic in India's metros — a generation that is more mobile, more socially fragmented, and more likely to move cities for education or work than any generation before them. They are digital-first, but deeply crave real-world connection.

**Live MVP:** https://daymate-mvp.vercel.app/
**GitHub:** https://github.com/TeenaMandaar/daymate-mvp
**Status:** MVP Live | Launching in Delhi (Pilot City)

---

## 2. The Problem

### 2.1 The Core Problem
Going solo to public activities is socially uncomfortable. You want to watch a film on opening day, try a new cafe, or attend a comedy show — but your friends are busy, not interested, or cancel last minute. So you either skip it or go alone and feel out of place.

This is not a rare experience. It is the dominant social experience for a growing segment of young urban India.

### 2.2 Why This Problem Is Getting Worse

- **India's urban migration is accelerating.** As of 2024, over **500 million Indians live in urban areas**, with tens of millions of young people relocating to metros like Delhi, Bengaluru, and Mumbai each year for college or work.
- **They arrive without social networks.** A student moving from Lucknow to Delhi has no built-in friend group. It can take 6–18 months to form genuine friendships.
- **Existing options don't solve this.** Dating apps carry romantic pressure. Meetup groups are large and intimidating. Social clubs are expensive. There is no safe, casual, one-on-one hangout solution.
- **Loneliness is at a crisis level.** A 2023 Meta-Gallup survey found that **1 in 4 people globally feel very lonely**. Among young adults (18–34), the number is even higher.

### 2.3 The Specific Situations Daymate Solves

| Situation | Current "Solution" | The Problem With It |
|---|---|---|
| New to a city, eating lunch alone every day | Nothing | Depressing and isolating |
| Wants to watch a movie on opening day, no one free | Skip it or go alone | Missing out on things you enjoy |
| Has comedy show tickets, friend cancelled | Go alone and feel awkward | Public events feel worse solo |
| Introvert who loves solo cafes but wants conversation | Dating apps | Wrong context, wrong pressure |

---

## 3. The Solution — What Is Daymate?

Daymate is a **curated, activity-first companion matching platform** for strictly platonic hangouts.

### 3.1 The Core Idea in One Sentence
> *"You pick what you want to do. We find you a verified person to do it with."*

### 3.2 What Makes Daymate Different

| Feature | Dating Apps (Bumble, Tinder) | LetsGo / Meetup | **Daymate** |
|---|---|---|---|
| Starts with | Profiles / Photos | Group events | **Activity / Experience** |
| Format | 1-on-1 (romantic) | Group (strangers) | **1-on-1 (platonic)** |
| Vetting | Algorithm | None | **Manual human review** |
| Venue control | None | None | **Public venues only** |
| Safety tools | Basic | None | **SOS + timeline check-in** |
| Romantic pressure | High | Low | **Zero** |

### 3.3 The Tagline
> *"It's a hangout, not a date."*

---

## 4. Target Audience & User Personas

### Primary Audience
Urban Gen-Z and Millennials, ages **18–35**, living in Indian metros.

### Persona 1: Priya, 23 — "The Transplant"
- Moved from Bhopal to Delhi 4 months ago for her first job at a tech startup
- Has work colleagues but no real friends yet in the city
- Loves trying new cafes, watching indie films, and stand-up comedy
- **Pain point:** She has a list of places she wants to visit but feels weird going alone, and no one to go with
- **How she uses Daymate:** Books a Coffee Plan on Saturday afternoon. Matches with a verified companion. Has a 90-minute conversation over good coffee. Leaves feeling less isolated.

### Persona 2: Kabir, 26 — "The Niche Hobbyist"
- Lives in Delhi, has a solid friend group, but his friends don't share his interests
- Loves foreign language films, obscure stand-up shows, and experimental restaurants
- **Pain point:** His friends always veto his plan suggestions. He ends up either going alone or not going at all.
- **How he uses Daymate:** Books a Comedy Plan for a niche stand-up show. Gets matched with someone who is also into alternative comedy. Has an amazing night without compromising.

### Persona 3: Aisha, 21 — "The Cautious Explorer"
- College student in Delhi, slightly introverted, social anxiety in large group settings
- Wants to be more social and try new things but finds dating apps deeply uncomfortable
- **Pain point:** Every platform she tries has a romantic undertone. She just wants a low-pressure hangout.
- **How she uses Daymate:** The "Strictly Platonic. Clear Boundaries." messaging immediately makes her trust the platform. She books a Lunch Plan and appreciates that she can see the companion's profile before confirming.

---

## 5. Product Features & User Flow

### 5.1 The MVP User Journey (6 Steps)

```
Step 1: LAND
User visits daymate-mvp.vercel.app
They see the Safety First section BEFORE anything else.
Trust is established immediately.

Step 2: PICK AN ACTIVITY
User opens the app and selects from:
Movie Plan (₹300) | Coffee Plan (₹400) | Lunch (₹600) | Dinner (₹800) | Comedy (₹500)
No profiles are shown at this stage. Activity is chosen first.

Step 3: VIBE CHECK
User fills in: Name, Age, Gender, City & Preferred Area, Date & Time
Then completes the Vibe Check:
  → Energy slider: Chill ←→ High Energy
  → Vibe Tags: Yapper | Good Listener | Aesthetic Hunter | Foodie | Laid Back

Step 4: PAY & CONFIRM
User pays the fixed base fee via UPI/Card.
This platform fee acts as a quality filter — only genuine users proceed.

Step 5: COMPANION PROFILE REVEAL
After payment, Daymate shows the matched companion's verified profile.
The user can:
  → ACCEPT — proceed with this companion
  → SKIP — see the next available match
This gives users control without making it feel like a dating app.

Step 6: CHECK-IN / CHECK-OUT (TIMELINE ACCOUNTABILITY)
Before the hangout: User checks in via app at the venue.
After the hangout: User checks out when the plan ends.
Both parties are accountable. Safety team monitors active plans.
```

### 5.2 The Companion Journey

```
Step 1: Apply via Google Form (https://forms.gle/yLsxrZ6NeVB8j9bM6)
Step 2: Manual review by Daymate team
Step 3: Approval notification via WhatsApp
Step 4: Receive match requests for activities you're available for
Step 5: Complete the hangout
Step 6: Get paid per completed plan
```

### 5.3 Core MVP Features Built

| Feature | Description |
|---|---|
| Landing Page | Full product landing page with 10+ sections |
| App Flow | 5-screen interactive prototype (plan → form → confirmation) |
| Dark Mode | Full dark theme with localStorage memory |
| SOS Button | Visible in app header during entire flow |
| Vibe Check | Energy slider + 5 selectable vibe tags |
| Timeline Badge | Check-in/check-out accountability notice |
| Safety Section | 6-card safety trust section on landing page |
| Testimonials | 3 early-reaction quote cards |
| Companion Section | Companion onboarding CTA with mock profiles |
| Google Forms | 2 live forms for early access & companion sign-ups |

---

## 6. Safety Framework

Safety is not a feature for Daymate — it is the foundation. Every product decision is made through a safety lens.

### 6.1 Pre-Hangout Safety
- **Manual Companion Verification:** Every companion application is reviewed by a human team member before approval. No automation, no bots.
- **Curated Access Fee:** A platform fee at registration ensures only serious, genuine users can access the platform. This is a quality filter, not just a revenue source.
- **Companion Profile Approval:** Users see and approve their matched companion's profile before the hangout is confirmed.

### 6.2 During the Hangout
- **Public Venues Only:** Private locations are strictly prohibited. All plans take place at highly-rated, publicly accessible venues.
- **In-App SOS Button:** Visible at all times during the app flow. One tap alerts the Daymate safety team immediately.
- **Timeline Check-In/Check-Out:** Both users and companions confirm arrival and departure via the app. Active plans are monitored by the safety team.

### 6.3 Post-Hangout Safety
- **Two-Way Reviews:** Both user and companion rate the experience. Poor ratings immediately flag an account for review.
- **Zero Tolerance Policy:** Any reports of inappropriate behavior result in immediate suspension pending investigation.

### 6.4 Community Guidelines (Non-Negotiable)
1. All hangouts are strictly platonic. No romantic behavior.
2. Public venues only. No private meetups ever.
3. No sharing of sensitive personal information (home address, financial details).
4. Respect time boundaries — plans have a fixed start and end time.
5. Any discomfort → use SOS immediately, no questions asked.

---

## 7. Competitor Analysis

### 7.1 Direct Competitors

**Bumble BFF**
- Pros: Large user base, familiar interface
- Cons: Still has a "swipe culture" feel, no activity-first approach, no safety infrastructure specific to platonic hangouts, often confusing with the romantic Bumble app

**LetsGo / Social Clubs**
- Pros: Group settings are lower pressure
- Cons: Group dynamics are intimidating for introverts, no 1-on-1 experience, no vetting of participants

**Random Friend Apps (FRRND, etc.)**
- Pros: Focused on platonic connections
- Cons: Poor safety infrastructure, no manual verification, inactive user bases, no activity-first approach

### 7.2 Why Daymate Wins

| Factor | Competitors | Daymate |
|---|---|---|
| Activity-first design | ❌ Profile-first | ✅ |
| Manual companion verification | ❌ | ✅ |
| Public venues enforced | ❌ | ✅ |
| SOS safety tool | ❌ | ✅ |
| Timeline accountability | ❌ | ✅ |
| Post-booking profile approval | ❌ | ✅ |
| India-specific positioning | ❌ (Global) | ✅ (Delhi-first) |

### 7.3 Daymate's Unique Positioning
Daymate is the only platform in India that is simultaneously:
- **Activity-first** (not profile-first)
- **Strictly platonic** (enforced, not just stated)
- **Manually verified** (human review, not algorithm)
- **Safety-infrastructure-first** (SOS + timeline + public venues)

---

## 8. Business Model & Monetization

Daymate has three revenue streams:

### 8.1 Platform Access Fee (Quality Filter + Revenue)
- A one-time fee charged at user registration
- Purpose: Filters out non-serious/bad-faith users
- Amount: To be finalized by founding team
- This fee ensures the user base remains high-quality and serious

### 8.2 Per-Plan Booking Fee (Primary Revenue)
- Every plan booked generates revenue for Daymate
- Structure: Fixed base fee charged to the user

| Plan | User Pays | Companion Earns | Daymate Cut |
|---|---|---|---|
| Coffee Plan | ₹400 | ₹280 | ₹120 (30%) |
| Movie Plan | ₹300 | ₹210 | ₹90 (30%) |
| Lunch Plan | ₹600 | ₹420 | ₹180 (30%) |
| Dinner Plan | ₹800 | ₹560 | ₹240 (30%) |
| Comedy Plan | ₹500 | ₹350 | ₹150 (30%) |

### 8.3 Future Revenue Streams (Post-MVP Roadmap)
- **Premium Companion Profiles:** Companions pay for higher visibility in matching
- **Corporate Packages:** Companies pay for Daymate access for relocated employees
- **Brand Partnerships:** Cafes, theaters, and restaurants pay to be listed as preferred venues

### 8.4 Unit Economics (Conservative Estimate)
- If Daymate completes **50 plans/month** in Delhi pilot:
  - Average plan fee = ₹520
  - Daymate cut (30%) = ₹156/plan
  - Monthly revenue = **₹7,800**
- At **500 plans/month** (post-scaling):
  - Monthly revenue = **₹78,000**
- At **5,000 plans/month** (3-city expansion):
  - Monthly revenue = **₹7,80,000**

---

## 9. Go-to-Market Strategy

### Phase 1: Delhi Pilot (Month 1–3)
- Launch exclusively in Delhi NCR
- Target: South Delhi, Connaught Place, Hauz Khas, Saket (high young professional density)
- Onboard **50 verified companions** manually before public launch
- Acquire first **200 users** via college partnerships and Instagram marketing
- Goal: Complete **100 plans** in the first 3 months
- Measure: Repeat booking rate, NPS score, safety incident rate (target: 0)

### Phase 2: Refine & Validate (Month 4–6)
- Analyze data from pilot: What plans are most popular? What times? What areas?
- Build the companion profile reveal feature into the actual backend
- Launch companion rating system
- Target: **500 plans/month** in Delhi

### Phase 3: Expand (Month 7–12)
- Launch in Bengaluru (massive young professional transplant population)
- Launch in Mumbai
- Begin building the tech infrastructure to automate matching (currently manual)
- Target: **5,000 plans/month** across 3 cities

---

## 10. Success Metrics

### MVP Metrics (Month 1–3)
| Metric | Target |
|---|---|
| Companion applications received | 100+ |
| Early access sign-ups | 200+ |
| Verified companions onboarded | 50 |
| Plans completed | 100 |
| User NPS score | 8+/10 |
| Safety incidents | 0 |
| Repeat booking rate | 30%+ |

### Product Health Metrics (Ongoing)
- **Completion Rate:** % of booked plans that actually happen
- **Skip Rate:** How often users skip the suggested companion profile
- **Vibe Match Score:** Do users feel their companion matched their energy?
- **Review Score:** Average post-hangout rating for companions

---

## 11. Future Product Roadmap

### Near-Term (Post-MVP)
- Real backend database to store bookings and companion data
- WhatsApp Business API integration for automated confirmations
- Live companion availability calendar
- Real payment gateway (Razorpay integration)

### Mid-Term
- Group hangout plans (3–4 people for events like concerts or dining)
- Daymate Verified Venues: Partner cafes and restaurants get listed and recommended
- Companion specialization tags (e.g., "Great for museum visits," "Fluent in French")
- In-app check-in/check-out system with real-time monitoring

### Long-Term
- Corporate B2B product: Companies pay for Daymate access for relocated employees
- Daymate for Seniors: Platonic companions for older adults who feel isolated
- City Event Integrations: Companion matching for specific events (concerts, exhibitions)
- AI-powered vibe matching algorithm replacing manual matching team

---

## 12. Tech Stack

The MVP was built entirely with frontend technologies — no backend required for this phase.

| Layer | Technology | Why |
|---|---|---|
| Structure | HTML5 | Standard, universally supported |
| Design | CSS3 (Vanilla) | Maximum control, no dependencies |
| Interactivity | JavaScript (Vanilla) | Lightweight, no framework needed |
| Font | Outfit (Google Fonts) | Modern, rounded, Gen-Z appropriate |
| Forms | Google Forms | Free, instant data collection, no backend needed |
| Version Control | Git + GitHub | Industry standard, free, collaborative |
| Deployment | Vercel | Free, auto-deploys from GitHub, custom domain ready |

**Why no React/Next.js?** The brief said "do not overbuild." A vanilla HTML/CSS/JS approach is faster to build, easier to maintain, has zero dependencies, and works perfectly for a UI prototype. A framework would add unnecessary complexity for a project of this scope.

---

## 13. Conclusion

Daymate addresses a real, growing, and deeply underserved problem in urban India. The MVP successfully demonstrates:

1. A **clear product vision** with strong safety-first positioning
2. A **working interactive prototype** of the user journey
3. A **live data collection pipeline** via Google Forms
4. A **defensible business model** with three revenue streams
5. A **scalable go-to-market strategy** starting with a focused Delhi pilot

The platform is intentionally built for trust. In a space where "companion apps" carry enormous stigma, Daymate's design, copy, safety infrastructure, and product flow work together to make users feel genuinely safe — before they even click a button.

> *"It's a hangout, not a date. And that distinction changes everything."*

---

**Submitted by:** Teena Mandaar
**Live MVP:** https://daymate-mvp.vercel.app/
**GitHub:** https://github.com/TeenaMandaar/daymate-mvp
**Date:** May 2026
