# Live at https://simple-todo-task-management.vercel.app

### Note:

Upload files to one children card will update all the children card, it's because authorization was not applied in this project.

### Features:

- Click on the attachment icon and add any types of file (Single/Multiple)
- Click on the count value of attachment, list of the files will be displayed
- Click on each file to view details

## Technology used:

- HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Reactjs, Nextjs, Python, Django Rest Frameword

## Instruction to run this project on local machine

Clone or download the repository

- Backend instruction
  Go into backend directory and open command prompt, then create and activate virtual environment
  Install necessary libraries:

```bash
pip install -r requirements.txt
```

Apply migrations:

```bash
py manage.py makemigrations app_useraccount
py manage.py migrate
py manage.py makemigrations app_files
py manage.py migrate
```

Create super user/admin user:

```bash
py manage.py createsuperuser
```

Run backend server:

```bash
py manage.py runserver
```

- Frontend instruction
  Go into frontend directory and open command prompt
  Re-name .env.example file to .env.local

  Install packages:

```bash
npm install
```

Run frontend server:

```bash
npm run dev
```

Copy and paste the url to a browser.
