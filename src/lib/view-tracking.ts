import { config } from "@/config";
import { NextRequest } from "next/server";

const LOOPBACK_IPS = new Set(["127.0.0.1", "::1", "0:0:0:0:0:0:0:1"]);

export function normalizeIpAddress(ipAddress?: string | null) {
  if (!ipAddress) {
    return null;
  }

  const [firstIp] = ipAddress.split(",");
  const trimmedIp = firstIp?.trim();

  if (!trimmedIp) {
    return null;
  }

  return trimmedIp.startsWith("::ffff:") ? trimmedIp.slice(7) : trimmedIp;
}

export function getRequestIpAddress(request: NextRequest) {
  return normalizeIpAddress(
    request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      request.headers.get("cf-connecting-ip")
  );
}

export function getRequestUserAgent(request: NextRequest) {
  return request.headers.get("user-agent")?.trim() || undefined;
}

export function shouldExcludeViewByIp(ipAddress: string | null) {
  if (!ipAddress) {
    return true;
  }

  return (
    LOOPBACK_IPS.has(ipAddress) ||
    config.viewTracking.excludedIps.includes(ipAddress)
  );
}
