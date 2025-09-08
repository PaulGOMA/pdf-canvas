import type { IMetadata, IStructure } from '../types/document.type'

/**
 * defaultStructure - Default structure for a document
 * @constant {IStructure} defaultStructure
 * @default { numberOfPages: 1, format: 'A4', orientation: 'portrait' }
 */
const defaultStructure: IStructure = {
  numberOfPages: 1,
  format: 'A4',
  orientation: 'portrait',
}

/**
 * Document Class
 * Creates a new Document instance with the provided metadata and structure.
 * @class Document
 * @implements {IDocument}
 * @param {IMetadata} metadata - The metadata of the document.
 * @param {IStructure} [structure=defaultStructure] - The structure of the document.
 */
export class Document {
  private metadata: IMetadata
  private structure: IStructure

  constructor(metadata: IMetadata, structure: IStructure = defaultStructure) {
    this.metadata = metadata
    this.structure = structure || defaultStructure
  }

  getMetadata(): IMetadata {
    return this.metadata
  }

  setTitle(title: string): void {
    this.metadata.title = title
  }

  setDescription(description: string): void {
    this.metadata.description = description
  }

  addKeywords(keywords: string[]): void {
    if (!this.metadata.keywords) {
      this.metadata.keywords = new Set()
    }
    keywords.forEach((keyword) => this.metadata.keywords?.add(keyword))
  }
}
