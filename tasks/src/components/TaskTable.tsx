import React from "react";
import styles from "./css/taskTable.module.css";

interface Task {
  title: string;
  description: string;
  creationDate: string;
  status: string;
}

interface TaskTableProps {
  tasks: Task[];
  onUpdateStatus: (index: number, status: string) => void;
}

const statusOptions = ["Pending", "In progress", "Done"];

const TaskTable: React.FC<TaskTableProps> = ({ tasks, onUpdateStatus }) => {
  const handleStatusChange = (
    index: number,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onUpdateStatus(index, e.target.value);
  };

  return (
    <div className={styles.taskContainer}>
     
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Creation Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td className={styles.taskTitleCell}>
                  <div
                    className={`${styles.statusIndicator} ${
                      task.status === "Done"
                        ? styles.statusDone
                        : task.status === "In progress"
                        ? styles.statusInProgress
                        : styles.statusPending
                    }`}
                  ></div>
                  {task.title}
                </td>
                <td>{task.description}</td>
                <td>{task.creationDate}</td>
                <td>
                  <select
                    value={task.status}
                    onChange={(e) => handleStatusChange(index, e)}
                  >
                    {statusOptions.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
