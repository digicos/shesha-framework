/**
 * String Builder
 */
export declare class StringBuilder {
    #private;
    readonly content: string[];
    _indent: number;
    /**
     * Increment the current indentation level.
     */
    incIndent(): void;
    /**
     * Decreases the current indentation level.
     */
    decIndent(): void;
    /**
     * Appends a line to the content.
     *
     * @param {string} line - the line to be appended
     * @return {void}
     */
    append(line: string): void;
    /**
     * Append multiple lines to the current context.
     *
     * @param {string[]} lines - array of lines to be appended
     * @return {void}
     */
    appendLines(lines: string[]): void;
    /**
     * Build the entire content by joining with '\r\n'.
     *
     * @return {string} the joined content
     */
    build(): string;
}
