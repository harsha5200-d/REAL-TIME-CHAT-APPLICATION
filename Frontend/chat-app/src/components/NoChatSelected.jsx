import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-base-100">
      <div className="text-center p-8">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <MessageSquare className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Welcome to Chat!</h2>
        <p className="text-base-content/70">
          Select a conversation from the sidebar to start messaging
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
