import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"
import Link from "next/link"

export function CommentSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare size={24} />
              Comments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 space-y-4">
              <p className="text-muted-foreground">Sign in to leave a comment and join the discussion</p>
              <Button asChild>
                <Link href="/login">Sign In to Comment</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
