**🏗️ in construction**

- basic functionality established, except:
  - finishing stories after a certain amount
  - upvotes
  - securing api
- currently no styling and component design in frontend

---

# The Sentence Game

A web-based adaptation of the glory sentence game:

- Add your sentence to a story and only see the last written sentence
- *Or*: Start a new story
- Get notified when your story-contribution finished
- and upvote existing stories
- no sign up needed
- 12 sentences make a story
- max. 140 characters per sentence
- 🥳 enjoy!

# Setup

## Requirements
- Node.js (v18)
- PostgreSQL database 
   - Schema: sentence_game
   - Tables:
     - locked-stories
     - sentences
     - stories
   - Table-Definitions are synced on backend start

## Steps

1. Install dependencies

```
cd backend/
npm install

cd frontend/
npm install
```

2. Start your PostgreSQL Server and put in corresponding environment variables in `backend/.env`

3. Start backend

```
npm run start:dev
```

4. Start frontend

```
ng serve
```

5. Go to your browser (use two browser to play with yourself) on localhost:4200 - default

# Technologies

- Angular
- NestJS
- Typeorm
- Socket.io
- PostgreSQL

