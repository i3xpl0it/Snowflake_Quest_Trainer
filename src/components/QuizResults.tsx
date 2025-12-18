import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Target, RotateCcw, Sparkles } from "lucide-react";

interface QuizResultsProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const QuizResults = ({ score, total, onRestart }: QuizResultsProps) => {
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 70;

  return (
    <Card className="glass-card rounded-3xl p-8 border-border/50 text-center max-w-md mx-auto animate-in">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center ${
            passed ? "gradient-primary glow-primary" : "bg-destructive/20"
          }`}>
            {passed ? (
              <Trophy className="w-10 h-10 text-primary-foreground" />
            ) : (
              <Target className="w-10 h-10 text-destructive" />
            )}
          </div>
          
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-foreground">
              {passed ? "Congratulations!" : "Keep Practicing!"}
            </h2>
            <p className="text-muted-foreground text-sm">
              {passed 
                ? "You've demonstrated strong knowledge" 
                : "Review the topics and try again"}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <div className={`text-7xl font-bold ${passed ? "gradient-text" : "text-destructive"}`}>
              {percentage}%
            </div>
            {passed && (
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-accent animate-pulse-slow" />
            )}
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="text-center">
              <p className="text-2xl font-semibold text-success">{score}</p>
              <p className="text-muted-foreground">Correct</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-semibold text-destructive">{total - score}</p>
              <p className="text-muted-foreground">Incorrect</p>
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm">
            Passing score: <span className="font-medium text-foreground">70%</span>
          </p>
        </div>

        <Button 
          onClick={onRestart} 
          size="lg"
          className="gap-2 gradient-primary hover:opacity-90 transition-opacity border-0 w-full"
        >
          <RotateCcw className="w-4 h-4" />
          Try Again
        </Button>
      </div>
    </Card>
  );
};
