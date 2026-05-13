import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes } from "react-icons/fa";

function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-cyan-500 text-white p-4 rounded-full shadow-2xl"
      >
        {open ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 h-[500px] z-50 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden"
          >

            {/* Header */}
            <div className="bg-cyan-500/20 border-b border-white/10 px-4 py-3 flex items-center gap-3">
              <FaRobot className="text-cyan-300 text-xl" />
              <div>
                <h2 className="text-white font-bold">
                  AI Assistant
                </h2>
                <p className="text-xs text-gray-300">
                  Ask me anything
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto text-white space-y-4 h-[360px]">
              <div className="bg-white/10 p-3 rounded-2xl w-fit max-w-[80%]">
                👋 Hi! I'm Sourav's AI assistant.
              </div>

              <div className="bg-cyan-500/20 p-3 rounded-2xl w-fit max-w-[80%] ml-auto">
                Tell me about this portfolio.
              </div>

              <div className="bg-white/10 p-3 rounded-2xl w-fit max-w-[80%]">
                This portfolio showcases React, Tailwind, AWS, and frontend animations.
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-xl bg-white/10 text-white outline-none border border-white/10"
              />

              <button className="bg-cyan-500 hover:bg-cyan-400 transition px-4 py-2 rounded-xl text-white">
                Send
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatBot;