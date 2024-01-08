export class CastHelper {
  public isCastable(castsRemaining: number): boolean {
    if (castsRemaining > 0) {
      return true;
    }

    return false;
  }
}
