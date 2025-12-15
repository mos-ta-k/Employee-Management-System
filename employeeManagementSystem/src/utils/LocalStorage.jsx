const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Prepare sales report",
          "discription": "Create monthly sales report",
          "date": "2025-01-10",
          "catagory": "Reporting",
          "actvie": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Client follow-up",
          "discription": "Email pending clients",
          "date": "2025-01-08",
          "catagory": "Communication",
          "actvie": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Update CRM",
          "discription": "Update customer records",
          "date": "2025-01-05",
          "catagory": "Data Entry",
          "actvie": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Fix login bug",
          "discription": "Resolve authentication issue",
          "date": "2025-01-12",
          "catagory": "Development",
          "actvie": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Code review",
          "discription": "Review pull requests",
          "date": "2025-01-09",
          "catagory": "Development",
          "actvie": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Optimize database",
          "discription": "Improve query performance",
          "date": "2025-01-06",
          "catagory": "Database",
          "actvie": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Design landing page",
          "discription": "Create UI for landing page",
          "date": "2025-01-14",
          "catagory": "Design",
          "actvie": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update brand assets",
          "discription": "Refresh icons and images",
          "date": "2025-01-11",
          "catagory": "Design",
          "actvie": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Prototype testing",
          "discription": "Test UI with users",
          "date": "2025-01-07",
          "catagory": "UX",
          "actvie": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Server monitoring",
          "discription": "Monitor server health",
          "date": "2025-01-13",
          "catagory": "IT Support",
          "actvie": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Backup data",
          "discription": "Weekly system backup",
          "date": "2025-01-10",
          "catagory": "Maintenance",
          "actvie": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Fix network issue",
          "discription": "Resolve connectivity problem",
          "date": "2025-01-06",
          "catagory": "Networking",
          "actvie": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Recruitment screening",
          "discription": "Screen candidate resumes",
          "date": "2025-01-15",
          "catagory": "HR",
          "actvie": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Conduct interviews",
          "discription": "Interview candidates",
          "date": "2025-01-12",
          "catagory": "HR",
          "actvie": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Update policies",
          "discription": "Revise HR policies",
          "date": "2025-01-08",
          "catagory": "Administration",
          "actvie": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    }
];

const admin = [
    {
  "admin": {
    "id": 1001,
    "email": "admin@example.com",
    "password": "admin@123"
  }
}
];


export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees, admin)
}
