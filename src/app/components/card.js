// components/UniversalCard.jsx
"use client";

import Image from "next/image";

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} [props.image]
 * @param {string} [props.alt]
 * @param {boolean} [props.gradient]
 * @param {React.ReactNode} [props.icon]
 * @param {string} [props.title]
 * @param {string} [props.subtitle]
 * @param {string} [props.description]
 * @param {string} [props.buttonText]
 * @param {"default" | "outline" | "secondary"} [props.buttonVariant]
 * @param {boolean} [props.clickable]
 * @param {React.ReactNode} [props.children] // optional custom content
 */
export default function UniversalCard({
                                          className = "",
                                          image,
                                          alt,
                                          gradient = false,
                                          icon,
                                          title,
                                          subtitle,
                                          description,
                                          buttonText,
                                          buttonVariant = "secondary",
                                          clickable = true,
                                          children,
                                      }) {
    return (
        <div
            className={`overflow-hidden ${
                clickable ? "group cursor-pointer" : ""
            } rounded-xl transition-shadow hover:shadow-xl ${className}`}
        >
            <div className="relative h-full">
                {image && (
                    <Image
                        src={image}
                        alt={alt || title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-700"
                    />
                )}

                {gradient && (
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
                )}

                {/* custom content override */}
                {children ? (
                    <div className="absolute inset-0">{children}</div>
                ) : (
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        {icon && <div className="mb-3">{icon}</div>}
                        {subtitle && (
                            <p className="text-sm text-muted-foreground mb-1">{subtitle}</p>
                        )}
                        {title && (
                            <h3 className="text-xl font-bold text-secondary-foreground mb-2">
                                {title}
                            </h3>
                        )}
                        {description && (
                            <p className="text-sm text-secondary-foreground/80 mb-4">
                                {description}
                            </p>
                        )}
                        {buttonText && (
                            <button className="w-full mt-2">
                                {buttonText}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
