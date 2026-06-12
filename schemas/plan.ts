// Tholo plan: the shape of the engine's public artifacts, for building
// against its outputs.
//
// Every field here is present in the published worked examples and the
// persisted run in examples/. The types describe what a plan exposes,
// nothing more.

/**
 * The plan as a whole. "ready" means every step carries a confident
 * selection and a prepared dispatch. "needs_clarification" means at least
 * one step came back ambiguous and the plan stopped rather than guess.
 */
export type PlanStatus = "ready" | "needs_clarification";

/**
 * One step of the decomposed task.
 */
export interface Step {
  /** Stable id within the plan, e.g. "step-1". */
  id: string;
  /** The step's goal, e.g. "audit the SEO on an existing page". */
  goal: string;
  /**
   * Skills selected for the step, by catalog slug. Absent while the step
   * needs clarification.
   */
  selected?: string[];
  /**
   * True when the selection for this step was ambiguous. The dispatch is
   * withheld; Tholo does not prepare a dispatch it is not confident in.
   */
  needs_clarification?: boolean;
  /** The prepared dispatch. Absent while the step needs clarification. */
  dispatch?: Dispatch;
}

/**
 * The prepared hand-off for one step: the skills to run and the inputs the
 * human gathers before running them.
 */
export interface Dispatch {
  /** Skills to run, by catalog slug. */
  skills: string[];
  /** The inputs the selected skills need, in plain language. */
  required_inputs: string[];
}

/**
 * Why a step stopped at needs-clarification, with the narrowing suggested.
 */
export interface Clarification {
  /** The step that stopped, e.g. "step-1". */
  step_id: string;
  /**
   * The reason, in behavior terms, e.g. the task matched several skills too
   * closely to choose between with confidence, and the suggestion to narrow
   * the goal for a sharper selection.
   */
  message: string;
}

/**
 * A complete Tholo plan.
 */
export interface Plan {
  /** The task as given. */
  goal: string;
  status: PlanStatus;
  steps: Step[];
  /** Present when the status is needs_clarification. */
  clarifications?: Clarification[];
  /**
   * Every step's required inputs, deduplicated; an input shared by more
   * than one step appears once. Withheld while any step is ambiguous,
   * since the list is unreliable until the ambiguity is narrowed.
   */
  required_inputs_union?: string[];
  /**
   * Always "prepared, not run". Execution is a human action; Tholo
   * prepares the plan and stops at this seam regardless of plan status.
   */
  execute_seam: string;
}
