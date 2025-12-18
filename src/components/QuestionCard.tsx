import { Question } from "@/types/quiz";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  showFeedback: boolean;
}

export const QuestionCard = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  showFeedback,
}: QuestionCardProps) => {
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <Card className="glass-card rounded-2xl p-6 border-border/50 animate-in">
      <div className="space-y-6">
        <div className="space-y-3">
          <Badge 
            variant="secondary" 
            className="text-xs font-medium bg-primary/10 text-primary border-0 hover:bg-primary/20"
          >
            {question.category}
          </Badge>
          <h2 className="text-lg font-medium text-foreground leading-relaxed">
            {question.question}
          </h2>
        </div>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectOption = index === question.correctAnswer;
            const showCorrect = showFeedback && isCorrectOption;
            const showIncorrect = showFeedback && isSelected && !isCorrect;
            const optionLetter = String.fromCharCode(65 + index);

            return (
              <button
                key={index}
                onClick={() => !showFeedback && onSelectAnswer(index)}
                disabled={showFeedback}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                  showCorrect
                    ? "border-success bg-success/10 glow-success"
                    : showIncorrect
                    ? "border-destructive bg-destructive/10 glow-destructive"
                    : isSelected
                    ? "border-primary bg-primary/10 glow-primary"
                    : "border-border/50 bg-card hover:border-primary/50 hover:bg-primary/5"
                } ${showFeedback ? "cursor-default" : "cursor-pointer"}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold transition-colors ${
                      showCorrect
                        ? "bg-success text-success-foreground"
                        : showIncorrect
                        ? "bg-destructive text-destructive-foreground"
                        : isSelected
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {showCorrect ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : showIncorrect ? (
                      <XCircle className="w-4 h-4" />
                    ) : (
                      optionLetter
                    )}
                  </div>
                  <span className="text-sm text-foreground leading-relaxed pt-1">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div
            className={`p-4 rounded-xl ${
              isCorrect 
                ? "bg-success/10 border border-success/30" 
                : "bg-destructive/10 border border-destructive/30"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${isCorrect ? "bg-success/20" : "bg-destructive/20"}`}>
                {isCorrect ? (
                  <CheckCircle2 className="w-4 h-4 text-success" />
                ) : (
                  <XCircle className="w-4 h-4 text-destructive" />
                )}
              </div>
              <div className="space-y-1 flex-1">
                <span className={`font-semibold text-sm ${isCorrect ? "text-success" : "text-destructive"}`}>
                  {isCorrect ? "Correct!" : "Incorrect"}
                </span>
                <div className="flex items-start gap-2 mt-2">
                  <Lightbulb className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {question.explanation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
