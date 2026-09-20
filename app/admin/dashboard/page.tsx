'use client'

import { useState } from 'react'
import Link from 'next/link'

const SUBJECTS = [
  'Mathematics', 'English', 'Physics', 'Chemistry', 'Biology',
  'Economics', 'Financial Accounting', 'Commerce', 'Literature',
  'Government', 'CRK', 'IRS'
]

const DIFFICULTY_LEVELS = ['Basic', 'Intermediate', 'Advance', 'Twister']

export default function AdminDashboardPage() {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [subjectConfigs, setSubjectConfigs] = useState<Record<string, {
    file: File | null
    questionCount: number
    difficulty: string
    timeAllocation: number
  }>>({})
  const [generatedQuestions, setGeneratedQuestions] = useState<any[]>([])
  const [previewMode, setPreviewMode] = useState(false)
  const [published, setPublished] = useState(false)
  const [studentLink, setStudentLink] = useState('')

  const toggleSubject = (subject: string) => {
    setSelectedSubjects(prev =>
      prev.includes(subject)
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    )
  }

  const updateConfig = (subject: string, field: string, value: any) => {
    setSubjectConfigs(prev => ({
      ...prev,
      [subject]: { ...prev[subject], [field]: value }
    }))
  }

  const handleFileUpload = (subject: string, file: File) => {
    updateConfig(subject, 'file', file)
  }

  const simulateGeneration = () => {
    // TODO: Replace with real AI API call later
    setGeneratedQuestions([
      { id: 1, subject: 'Mathematics', question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correct: '4', explanation: 'Basic addition.' }
    ])
  }

  const generateStudentLink = () => {
    // TODO: Replace with real Supabase mock creation + unique URL
    setStudentLink('https://helix-academy-hot.vercel.app/student/subjects?mock=abc123')
    setPublished(true)
  }

  return (
    <main className="min-h-screen bg-[#e6f1ff] relative">
      {/* Header */}
      <header className="bg-[#0a192f] border-b border-[#233554]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 
            className="text-2xl font-bold text-white"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Admin Dashboard
          </h1>
          <Link
            href="/fork"
            className="text-[#8892b0] hover:text-[#ccd6f6] text-sm font-medium transition"
          >
            ← Back
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Step 1: Subject Selection */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#0a192f] mb-4">Step 1: Select Subjects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {SUBJECTS.map(subject => (
              <label
                key={subject}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition ${
                  selectedSubjects.includes(subject)
                    ? 'bg-[#112240] border-[#233554] text-white'
                    : 'bg-white border-[#233554] text-[#0a192f]'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSubjects.includes(subject)}
                  onChange={() => toggleSubject(subject)}
                  className="mr-3 w-4 h-4"
                />
                <span className="text-sm font-medium">{subject}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Step 2: Per-Subject Configuration */}
        {selectedSubjects.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0a192f] mb-4">Step 2: Configure Each Subject</h2>
            <div className="space-y-6">
              {selectedSubjects.map(subject => (
                <div key={subject} className="bg-white border border-[#233554] rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#0a192f] mb-4">{subject}</h3>
                  
                  {/* File Upload */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-[#0a192f] mb-2">
                      Upload File (Questions or Notes)
                    </label>
                    <input
                      type="file"
                      onChange={(e) => e.target.files?.[0] && handleFileUpload(subject, e.target.files[0])}
                      className="w-full text-sm text-[#0a192f] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#112240] file:text-white hover:file:bg-[#0a192f]"
                    />
                  </div>

                  {/* Question Count */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-[#0a192f] mb-2">
                      Number of Questions
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={subjectConfigs[subject]?.questionCount || 10}
                      onChange={(e) => updateConfig(subject, 'questionCount', parseInt(e.target.value))}
                      className="w-full md:w-48 px-4 py-2 border border-[#233554] rounded-lg text-[#0a192f] focus:outline-none focus:border-[#3d5a80]"
                    />
                  </div>

                  {/* Difficulty */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-[#0a192f] mb-2">
                      Difficulty Level
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {DIFFICULTY_LEVELS.map(level => (
                        <button
                          key={level}
                          onClick={() => updateConfig(subject, 'difficulty', level)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                            subjectConfigs[subject]?.difficulty === level
                              ? 'bg-[#112240] text-white'
                              : 'bg-[#e6f1ff] text-[#0a192f] hover:bg-[#d0e1f9]'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Allocation */}
                  <div>
                    <label className="block text-sm font-medium text-[#0a192f] mb-2">
                      Time Allocation (minutes)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={subjectConfigs[subject]?.timeAllocation || 30}
                      onChange={(e) => updateConfig(subject, 'timeAllocation', parseInt(e.target.value))}
                      className="w-full md:w-48 px-4 py-2 border border-[#233554] rounded-lg text-[#0a192f] focus:outline-none focus:border-[#3d5a80]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Step 3: Question Generation */}
        {selectedSubjects.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0a192f] mb-4">Step 3: Generate Questions</h2>
            <div className="bg-white border border-[#233554] rounded-xl p-6">
              <p className="text-[#0a192f] mb-4">
                AI will parse your files and generate questions based on difficulty and count.
              </p>
              <button
                onClick={simulateGeneration}
                className="bg-[#112240] hover:bg-[#0a192f] text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Generate Questions (AI Engine)
              </button>
            </div>
          </section>
        )}

        {/* Step 4: Review & Test */}
        {generatedQuestions.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0a192f] mb-4">Step 4: Review & Test</h2>
            <div className="bg-white border border-[#233554] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[#0a192f]">Preview questions as a student would see them.</p>
                <label className="flex items-center cursor-pointer">
                  <span className="mr-3 text-sm font-medium text-[#0a192f]">Preview Mode</span>
                  <input
                    type="checkbox"
                    checked={previewMode}
                    onChange={(e) => setPreviewMode(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-12 h-6 rounded-full transition ${previewMode ? 'bg-[#112240]' : 'bg-[#233554]'} relative`}>
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${previewMode ? 'translate-x-6' : ''}`} />
                  </div>
                </label>
              </div>
              {previewMode && (
                <div className="mt-4 p-4 bg-[#e6f1ff] rounded-lg">
                  <p className="text-sm text-[#0a192f]">Preview mode active. Questions will appear as in student view.</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Step 5: Publish */}
        {generatedQuestions.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#0a192f] mb-4">Step 5: Publish Mock</h2>
            <div className="bg-white border border-[#233554] rounded-xl p-6">
              {!published ? (
                <button
                  onClick={generateStudentLink}
                  className="bg-[#112240] hover:bg-[#0a192f] text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                  Generate Student Link
                </button>
              ) : (
                <div>
                  <p className="text-green-600 font-medium mb-2">✓ Mock Published!</p>
                  <p className="text-[#0a192f] mb-2">Share this link with students:</p>
                  <code className="block bg-[#e6f1ff] p-3 rounded-lg text-sm text-[#0a192f] break-all">
                    {studentLink}
                  </code>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  )
      }
