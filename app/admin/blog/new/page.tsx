"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ImagePlus, Save, Eye } from "lucide-react"
import Link from "next/link"
import { saveBlogPost, generateSlug } from "@/lib/blog-store"

export default function NewBlogPostPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [author, setAuthor] = useState("Mercy Munene")
  const [featuredImage, setFeaturedImage] = useState<string>("/placeholder.svg?height=400&width=800")
  const [additionalImages, setAdditionalImages] = useState<string[]>([])

  const handleFeaturedImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFeaturedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAdditionalImagesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAdditionalImages((prev) => [...prev, reader.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  const insertImageIntoContent = (imageUrl: string) => {
    setContent((prev) => prev + `\n\n[Image: ${imageUrl}]\n\n`)
  }

  const handleSave = (status: "draft" | "published") => {
    if (!title.trim()) {
      alert("Please enter a title for your blog post")
      return
    }
    if (!category) {
      alert("Please select a category")
      return
    }
    if (!excerpt.trim()) {
      alert("Please enter an excerpt")
      return
    }
    if (!content.trim()) {
      alert("Please enter content for your blog post")
      return
    }

    const slug = generateSlug(title)
    const date = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })

    // Map form fields to the BlogPost schema used by the store.
    // The blog listing filters by `published`, so we must set it correctly.
    saveBlogPost({
      title,
      excerpt,
      content,
      category,
      author,
      date,
      featuredImage,
      slug,
      published: status === "published",
      readTime: "5 min read",
    })

    // Trigger storage event for same-tab updates
    window.dispatchEvent(new Event("blogUpdated"))

    if (status === "published") {
      alert("Blog post published successfully!")
      router.push("/blog")
    } else {
      alert("Blog post saved as draft!")
      router.push("/admin/blog")
    }
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Create New Blog Post</h1>
            <p className="text-muted-foreground">Write and publish your article</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/admin/blog">Cancel</Link>
            </Button>
            <Button variant="outline" onClick={() => handleSave("draft")}>
              <Save className="mr-2" size={16} />
              Save Draft
            </Button>
            <Button onClick={() => handleSave("published")} className="bg-primary hover:bg-primary/90">
              <Eye className="mr-2" size={16} />
              Publish
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Details</CardTitle>
              <CardDescription>Basic information about your blog post</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter post title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Brief summary of your post (shown in listings)..."
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Kitchen Gardens">Kitchen Gardens</SelectItem>
                      <SelectItem value="Rabbit Farming">Rabbit Farming</SelectItem>
                      <SelectItem value="Organic Practices">Organic Practices</SelectItem>
                      <SelectItem value="Success Stories">Success Stories</SelectItem>
                      <SelectItem value="Food Security">Food Security</SelectItem>
                      <SelectItem value="Farming Tips">Farming Tips</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    placeholder="Author name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featured Image</CardTitle>
              <CardDescription>Main image for your blog post</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  {featuredImage && featuredImage !== "/placeholder.svg?height=400&width=800" ? (
                    <div className="space-y-4">
                      <img
                        src={featuredImage || "/placeholder.svg"}
                        alt="Featured"
                        className="max-h-64 mx-auto rounded-lg"
                      />
                      <Button
                        variant="outline"
                        onClick={() => setFeaturedImage("/placeholder.svg?height=400&width=800")}
                      >
                        Remove Image
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <ImagePlus className="mx-auto mb-4 text-muted-foreground" size={48} />
                      <p className="text-muted-foreground mb-4">Upload a featured image for your post</p>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleFeaturedImageUpload}
                        className="max-w-xs mx-auto"
                      />
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
              <CardDescription>Write your blog post content (supports Markdown formatting)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Write your post content here... Use ## for headings, **bold** for bold text, etc."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={20}
                className="font-mono text-sm"
              />

              <div className="space-y-2">
                <Label>Additional Images</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6">
                  <p className="text-sm text-muted-foreground mb-3">Upload images to insert into your content</p>
                  <Input type="file" accept="image/*" multiple onChange={handleAdditionalImagesUpload} />

                  {additionalImages.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-4">
                      {additionalImages.map((img, idx) => (
                        <div key={idx} className="space-y-2">
                          <img
                            src={img || "/placeholder.svg"}
                            alt={`Upload ${idx + 1}`}
                            className="w-full h-32 object-cover rounded"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => insertImageIntoContent(img)}
                            className="w-full"
                          >
                            Insert into Content
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>How your content will look</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <h1 className="text-3xl font-bold text-foreground mb-4">{title || "Your Title Here"}</h1>
                {content.split("\n").map((paragraph, idx) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={idx} className="text-2xl font-bold text-foreground mt-6 mb-3">
                        {paragraph.replace("## ", "")}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith("[Image: ")) {
                    const imageUrl = paragraph.match(/\[Image: (.*?)\]/)?.[1]
                    return imageUrl ? (
                      <img
                        key={idx}
                        src={imageUrl || "/placeholder.svg"}
                        alt="Content"
                        className="w-full rounded-lg my-4"
                      />
                    ) : null
                  }
                  if (paragraph.trim()) {
                    return (
                      <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
                        {paragraph.split("**").map((part, i) =>
                          i % 2 === 1 ? (
                            <strong key={i} className="font-semibold text-foreground">
                              {part}
                            </strong>
                          ) : (
                            part
                          ),
                        )}
                      </p>
                    )
                  }
                  return null
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
