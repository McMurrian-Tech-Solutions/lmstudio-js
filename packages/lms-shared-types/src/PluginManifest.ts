import { z } from "zod";

export type PluginRunnerType = "ecmascript";
export const pluginRunnerTypeSchema = z.enum(["ecmascript"]);

export const kebabCaseSchema = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

export interface PluginManifest {
  type: "plugin";
  runner: PluginRunnerType;
  owner: string;
  name: string;
  description: string;
}
export const pluginManifestSchema = z.object({
  type: z.literal("plugin"),
  runner: pluginRunnerTypeSchema,
  owner: kebabCaseSchema,
  name: kebabCaseSchema,
  description: z.string(),
});
