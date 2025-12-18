import { Progress } from "@/components/ui/progress";
import { Target, Trophy } from "lucide-react";

interface QuizProgressProps {
  current: number;
  total: number;
  score: number;
}

export const QuizProgress = ({ current, total, score }: QuizProgressProps) => {
  const progress = (current / total) * 100;

  return (
    <div className="glass-card rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Target className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
              Progress
            </p>
            <p className="text-lg font-semibold text-foreground">
              {current} <span className="text-muted-foreground font-normal">/ {total}</span>
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium text-right">
              Score
            </p>
            <p className="text-lg font-semibold text-foreground text-right">
              {score} <span className="text-muted-foreground font-normal">correct</span>
            </p>
          </div>
          <div className="p-2 rounded-lg bg-success/10">
            <Trophy className="w-4 h-4 text-success" />
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <Progress value={progress} className="h-2 bg-secondary" />
        <p className="text-xs text-muted-foreground text-center">
          {Math.round(progress)}% completed
        </p>
      </div>
    </div>
  );
};
