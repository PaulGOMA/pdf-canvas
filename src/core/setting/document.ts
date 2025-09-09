import type { IMetadata, IStructure } from '../types/document.type'

/**
 * Default structure applied to a document when no custom structure is provided.
 *
 * @constant
 * @type {IStructure}
 * @property {number} numberOfPages - Initial number of pages (default: 1)
 * @property {'A4'} format - Default page format
 * @property {'portrait'} orientation - Default page orientation
 */
const defaultStructure: IStructure = {
  numberOfPages: 1,
  format: 'A4',
  orientation: 'portrait',
}

/**
 * Represents a digital document composed of metadata and a structural layout.
 *
 * The `Document` class encapsulates metadata (title, author, keywords, etc.)
 * and a structure (format, orientation), along with a dynamic list of pages
 * represented as HTML canvas elements.
 *
 * @class
 * @example
 * const doc = new Document(metadata, { numberOfPages: 5, format: 'Legal', orientation: 'landscape' })
 */
export class Document {
  /**
   * Metadata describing the document (title, author, etc.)
   * @private
   */
  private metadata: IMetadata

  /**
   * Structural properties excluding the number of pages (handled separately)
   * @private
   */
  private structure: Omit<IStructure, 'numberOfPages'>

  /**
   * Internal list of pages represented as canvas elements
   * @private
   */
  private pages: HTMLCanvasElement[]

  /**
   * Creates a new Document instance.
   *
   * @constructor
   * @param {IMetadata} metadata - Metadata describing the document.
   * @param {IStructure} [structure=defaultStructure] - Optional structure configuration.
   */
  constructor(metadata: IMetadata, structure: IStructure = defaultStructure) {
    this.metadata = metadata
    const { numberOfPages, ...rest } = structure || defaultStructure
    this.structure = rest
    this.pages = Array.from({ length: numberOfPages || 1 }, () => document.createElement('canvas'))
  }

  // ────────────────────────────────────────────────────────────────
  // Metadata Methods
  // ────────────────────────────────────────────────────────────────

  /**
   * Retrieves the document's metadata.
   * @returns {IMetadata}
   */
  getMetadata(): IMetadata {
    return this.metadata
  }

  /**
   * Updates the document's title.
   * @param {string} title - New title to assign.
   */
  setTitle(title: string): void {
    this.metadata.title = title
  }

  /**
   * Updates the document's description.
   * @param {string} description - New description to assign.
   */
  setDescription(description: string): void {
    this.metadata.description = description
  }

  /**
   * Adds new keywords to the document's metadata.
   * Initializes the keyword set if it doesn't exist.
   *
   * @param {string[]} keywords - Array of keywords to add.
   */
  addKeywords(keywords: string[]): void {
    if (!this.metadata.keywords) {
      this.metadata.keywords = new Set()
    }
    keywords.forEach((keyword) => this.metadata.keywords?.add(keyword))
  }

  // ────────────────────────────────────────────────────────────────
  // Structure Methods
  // ────────────────────────────────────────────────────────────────

  /**
   * Retrieves the document's structure, including the current page count.
   * @returns {IStructure}
   */
  getStructure(): IStructure {
    return {
      ...this.structure,
      numberOfPages: this.getNumberOfPages(),
    }
  }

  /**
   * Updates the document's page format.
   * @param {'A4' | 'A3' | 'Letter' | 'Legal'} format - New format to apply.
   */
  setFormat(format: 'A4' | 'A3' | 'Letter' | 'Legal'): void {
    this.structure.format = format
  }

  /**
   * Updates the document's page orientation.
   * @param {'portrait' | 'landscape' | 'square'} orientation - New orientation to apply.
   */
  setOrientation(orientation: 'portrait' | 'landscape' | 'square'): void {
    this.structure.orientation = orientation
  }

  // ────────────────────────────────────────────────────────────────
  // Page Management Methods
  // ────────────────────────────────────────────────────────────────

  /**
   * Returns the current number of pages in the document.
   * @returns {number}
   */
  getNumberOfPages(): number {
    return this.pages.length
  }

  /**
   * Adds one or more pages to the document.
   * @param {number} [number=1] - Number of pages to add.
   */
  addPage(number: number = 1): void {
    for (let i = 0; i < number; i++) {
      this.pages.push(document.createElement('canvas'))
    }
  }

  /**
   * Deletes a page at the specified index.
   * Throws an error if the index is out of bounds.
   *
   * @param {number} index - Index of the page to delete.
   * @throws {Error} If index is invalid.
   */
  deletePage(index: number): void {
    if (index < 0 || index >= this.pages.length) {
      throw new Error('Page index out of bounds')
    }
    this.pages.splice(index, 1)
  }
}
