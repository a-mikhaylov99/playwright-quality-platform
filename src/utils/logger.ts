export const LOG_LEVELS = ['debug', 'info', 'warn', 'error', 'silent'] as const;

export type LogLevel = (typeof LOG_LEVELS)[number];

const LEVEL_WEIGHT: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
  silent: Number.MAX_SAFE_INTEGER,
};

export interface LoggerOptions {
  /** Prefix printed with every message, usually a test or component name. */
  scope: string;
  /** Minimal level to print. Messages below this level are dropped. */
  level?: LogLevel;
}

/**
 * Minimal structured logger used by fixtures, page objects and API clients.
 * Intentionally dependency free: everything goes to stdout/stderr,
 * so it is picked up by the Playwright reporters as test output.
 */
export class Logger {
  private readonly scope: string;
  private readonly level: LogLevel;

  constructor(options: LoggerOptions) {
    this.scope = options.scope;
    this.level = options.level ?? 'info';
  }

  /** Creates a nested logger, e.g. `login test > ContactsApi`. */
  public child(scope: string): Logger {
    return new Logger({ scope: `${this.scope} > ${scope}`, level: this.level });
  }

  public debug(message: string, ...details: unknown[]): void {
    this.write('debug', message, details);
  }

  public info(message: string, ...details: unknown[]): void {
    this.write('info', message, details);
  }

  public warn(message: string, ...details: unknown[]): void {
    this.write('warn', message, details);
  }

  public error(message: string, ...details: unknown[]): void {
    this.write('error', message, details);
  }

  private write(level: LogLevel, message: string, details: unknown[]): void {
    if (LEVEL_WEIGHT[level] < LEVEL_WEIGHT[this.level]) {
      return;
    }

    const prefix = `[${level.toUpperCase()}] [${this.scope}]`;

    if (level === 'error') {
      console.error(prefix, message, ...details);
      return;
    }

    console.log(prefix, message, ...details);
  }
}
