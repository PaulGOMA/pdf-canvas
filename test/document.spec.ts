import { describe, it, expect } from 'vitest'
import type { IMetadata, IStructure } from '../src/core/types/document.type'
import { Document } from '../src/core/setting/document'

const meta: IMetadata = {
  title: 'Sample Document',
  author: 'Paul Goma',
  description: 'A brief description of the document.',
  keywords: new Set(['sample', 'document', 'typescript']),
  creationDate: new Date('2025-09-07'),
}

// const defaultStructure: IStructure = {
//   numberOfPages: 1,
//   format: 'A4',
//   orientation: 'portrait',
// }

const struct: IStructure = {
  numberOfPages: 10,
  format: 'Legal',
  orientation: 'landscape',
}

describe('Document', () => {
  it('Document constructor', () => {
    const doc1 = new Document(meta)
    const doc2 = new Document(meta, struct)

    // ✅ Check that the document instances are created successfully
    expect(doc1).toBeInstanceOf(Document)
    expect(doc2).toBeInstanceOf(Document)
  })

  it('getMetadata method', () => {
    const doc = new Document(meta, struct)
    expect(doc.getMetadata()).toEqual(meta)
  })

  it('setTitle method', () => {
    const doc = new Document(meta, struct)
    doc.setTitle('Updated Title')
    expect(doc.getMetadata().title).toBe('Updated Title')
  })

  it('setDescription method', () => {
    const doc = new Document(meta, struct)
    doc.setDescription('Updated Description')
    expect(doc.getMetadata().description).toBe('Updated Description')
  })

  it('setKeywords method', () => {
    const doc1 = new Document(meta, struct)
    doc1.addKeywords(['new', 'keywords'])
    expect(doc1.getMetadata().keywords).toEqual(
      new Set(['sample', 'document', 'typescript', 'new', 'keywords']),
    )

    const doc2 = new Document({ ...meta, keywords: null }, struct)
    doc2.addKeywords(['first', 'keywords'])
    expect(doc2.getMetadata().keywords).toEqual(new Set(['first', 'keywords']))
  })
})
