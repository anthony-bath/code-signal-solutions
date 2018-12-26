const incrementalBackups = (lastBackupTime, changes) => {
  const filesToBackup = new Set();

  for (let [backupTime, fileId] of changes) {
    if (backupTime > lastBackupTime) {
      filesToBackup.add(fileId);
    }
  }

  return Array.from(filesToBackup).sort((a, b) => a - b);
};
