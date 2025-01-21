import * as motion from "motion/react-client";

const ToastMessage = ({ message }: { message: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-20 p-4 bg-white dark:bg-black border border-black dark:border-white rounded shadow-md dark:text-white"
    >
      <h3>{message}</h3>
    </motion.div>
  );
};

export default ToastMessage;
