import { describe, it, expect, beforeEach } from 'vitest'
import type { IMetadata, IStructure } from '../src/core/types/document.type'
import { Document } from '../src/core/setting/document'

const meta: IMetadata = {
  title: 'Sample Document',
  author: 'Paul Goma',
  description: 'A brief description of the document.',
  keywords: new Set(['sample', 'document', 'typescript']),
  creationDate: new Date('2025-09-07'),
}

const struct: IStructure = {
  numberOfPages: 10,
  format: 'Legal',
  orientation: 'landscape',
}

let doc: Document

describe('Document', () => {
  beforeEach(() => {
    doc = new Document(meta, struct)
  })

  it('should create a Document instance', () => {
    expect(doc).toBeInstanceOf(Document)
  })

  it('should return correct metadata', () => {
    expect(doc.getMetadata()).toEqual(meta)
  })

  it('should update title and description', () => {
    doc.setTitle('Updated Title')
    doc.setDescription('Updated Description')
    expect(doc.getMetadata().title).toBe('Updated Title')
    expect(doc.getMetadata().description).toBe('Updated Description')
  })

  it('should add keywords correctly', () => {
    doc.addKeywords(['new', 'keywords'])
    expect(doc.getMetadata().keywords).toEqual(
      new Set(['sample', 'document', 'typescript', 'new', 'keywords']),
    )
  })

  it('should handle null keywords gracefully', () => {
    const doc2 = new Document({ ...meta, keywords: null }, struct)
    doc2.addKeywords(['first', 'keywords'])
    expect(doc2.getMetadata().keywords).toEqual(new Set(['first', 'keywords']))
  })

  it('should return correct structure including page count', () => {
    const structure = doc.getStructure()
    expect(structure.format).toBe('Legal')
    expect(structure.orientation).toBe('landscape')
    expect(structure.numberOfPages).toBe(10)
  })

  it('should update format and orientation', () => {
    doc.setFormat('A3')
    doc.setOrientation('portrait')
    const structure = doc.getStructure()
    expect(structure.format).toBe('A3')
    expect(structure.orientation).toBe('portrait')
  })

  it('should return correct number of pages', () => {
    expect(doc.getNumberOfPages()).toBe(10)
  })

  it('should add pages correctly', () => {
    doc.addPage(2)
    expect(doc.getNumberOfPages()).toBe(12)
  })

  it('should delete a page correctly', () => {
    doc.deletePage(1)
    expect(doc.getNumberOfPages()).toBe(9)
  })

  it('should throw error when deleting out-of-bounds page', () => {
    expect(() => doc.deletePage(100)).toThrow('Page index out of bounds')
  })
})
