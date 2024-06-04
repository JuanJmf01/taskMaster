"use client";

import React, { useState } from "react";
import TaskTable from "app/components/TaskTable";
import Menu from "app/layouts/menu";
import Image from "next/image";
import styles from "../css/tasks.module.css"; 
import CreateTaskBox from "app/components/createTaskBox";

const tasks = [
  {
    title: "Marketing",
    description: "Find users for interview",
    creationDate: "2024-06-01",
    status: "Pending",
  },
  {
    title: "Marketing",
    description: "Interview with users",
    creationDate: "2024-06-02",
    status: "Pending",
  },
  {
    title: "Design",
    description: "Competitors research",
    creationDate: "2024-06-03",
    status: "Pending",
  },
  {
    title: "Design",
    description: "Thinking",
    creationDate: "2024-06-04",
    status: "Pending",
  },
];

export default function Home() {
  const [tasksState, setTasksState] = useState(tasks);
  const [showCreateTaskBox, setShowCreateTaskBox] = useState(false);

  const handleUpdateStatus = (index: number, status: string) => {
    const updatedTasks = [...tasksState];
    updatedTasks[index].status = status;
    setTasksState(updatedTasks);
  };

  const handleAddButtonClick = () => {
    setShowCreateTaskBox(true);
  };

  const handleCloseCreateTaskBox = () => {
    setShowCreateTaskBox(false);
  };

  return (
    <Menu>
      <div className={styles.taskContainer}>
        <div className={styles.buttonContainer}>
          <Image
            className={styles.addButton}
            src="/masBlack.png"
            alt="TaskMaster Logo"
            width={33}
            height={33}
            priority
            onClick={handleAddButtonClick}
          />
        </div>
        <TaskTable tasks={tasksState} onUpdateStatus={handleUpdateStatus} />
        {showCreateTaskBox && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <CreateTaskBox />
              <button className={styles.closeButton} onClick={handleCloseCreateTaskBox}>Close</button>
            </div>
          </div>
        )}
      </div>
    </Menu>
  );
}
