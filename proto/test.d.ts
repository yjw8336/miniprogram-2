import * as $protobuf from "protobufjs";
/** Namespace jspb. */
export namespace jspb {

    /** Namespace test. */
    namespace test {

        /** OuterEnum enum. */
        enum OuterEnum {
            FOO = 1,
            BAR = 2
        }

        /** MapValueEnumNoBinary enum. */
        enum MapValueEnumNoBinary {
            MAP_VALUE_FOO_NOBINARY = 0,
            MAP_VALUE_BAR_NOBINARY = 1,
            MAP_VALUE_BAZ_NOBINARY = 2
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: jspb.test.IEmpty): jspb.test.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link jspb.test.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link jspb.test.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumContainer. */
        interface IEnumContainer {

            /** EnumContainer outerEnum */
            outerEnum?: (jspb.test.OuterEnum|null);
        }

        /** Represents an EnumContainer. */
        class EnumContainer implements IEnumContainer {

            /**
             * Constructs a new EnumContainer.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.IEnumContainer);

            /** EnumContainer outerEnum. */
            public outerEnum: jspb.test.OuterEnum;

            /**
             * Creates a new EnumContainer instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumContainer instance
             */
            public static create(properties?: jspb.test.IEnumContainer): jspb.test.EnumContainer;

            /**
             * Encodes the specified EnumContainer message. Does not implicitly {@link jspb.test.EnumContainer.verify|verify} messages.
             * @param message EnumContainer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.IEnumContainer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumContainer message, length delimited. Does not implicitly {@link jspb.test.EnumContainer.verify|verify} messages.
             * @param message EnumContainer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.IEnumContainer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumContainer message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumContainer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.EnumContainer;

            /**
             * Decodes an EnumContainer message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumContainer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.EnumContainer;

            /**
             * Verifies an EnumContainer message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumContainer message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumContainer
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.EnumContainer;

            /**
             * Creates a plain object from an EnumContainer message. Also converts values to other types if specified.
             * @param message EnumContainer
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.EnumContainer, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumContainer to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Simple1. */
        interface ISimple1 {

            /** Simple1 aString */
            aString: string;

            /** Simple1 aRepeatedString */
            aRepeatedString?: (string[]|null);

            /** Simple1 aBoolean */
            aBoolean?: (boolean|null);
        }

        /** Represents a Simple1. */
        class Simple1 implements ISimple1 {

            /**
             * Constructs a new Simple1.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.ISimple1);

            /** Simple1 aString. */
            public aString: string;

            /** Simple1 aRepeatedString. */
            public aRepeatedString: string[];

            /** Simple1 aBoolean. */
            public aBoolean: boolean;

            /**
             * Creates a new Simple1 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Simple1 instance
             */
            public static create(properties?: jspb.test.ISimple1): jspb.test.Simple1;

            /**
             * Encodes the specified Simple1 message. Does not implicitly {@link jspb.test.Simple1.verify|verify} messages.
             * @param message Simple1 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.ISimple1, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Simple1 message, length delimited. Does not implicitly {@link jspb.test.Simple1.verify|verify} messages.
             * @param message Simple1 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.ISimple1, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Simple1 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Simple1
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Simple1;

            /**
             * Decodes a Simple1 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Simple1
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Simple1;

            /**
             * Verifies a Simple1 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Simple1 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Simple1
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.Simple1;

            /**
             * Creates a plain object from a Simple1 message. Also converts values to other types if specified.
             * @param message Simple1
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.Simple1, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Simple1 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Simple2. */
        interface ISimple2 {

            /** Simple2 aString */
            aString: string;

            /** Simple2 aRepeatedString */
            aRepeatedString?: (string[]|null);
        }

        /** Represents a Simple2. */
        class Simple2 implements ISimple2 {

            /**
             * Constructs a new Simple2.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.ISimple2);

            /** Simple2 aString. */
            public aString: string;

            /** Simple2 aRepeatedString. */
            public aRepeatedString: string[];

            /**
             * Creates a new Simple2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Simple2 instance
             */
            public static create(properties?: jspb.test.ISimple2): jspb.test.Simple2;

            /**
             * Encodes the specified Simple2 message. Does not implicitly {@link jspb.test.Simple2.verify|verify} messages.
             * @param message Simple2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.ISimple2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Simple2 message, length delimited. Does not implicitly {@link jspb.test.Simple2.verify|verify} messages.
             * @param message Simple2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.ISimple2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Simple2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Simple2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Simple2;

            /**
             * Decodes a Simple2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Simple2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Simple2;

            /**
             * Verifies a Simple2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Simple2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Simple2
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.Simple2;

            /**
             * Creates a plain object from a Simple2 message. Also converts values to other types if specified.
             * @param message Simple2
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.Simple2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Simple2 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SpecialCases. */
        interface ISpecialCases {

            /** SpecialCases normal */
            normal: string;

            /** SpecialCases default */
            "default": string;

            /** SpecialCases function */
            "function": string;

            /** SpecialCases var */
            "var": string;
        }

        /** Represents a SpecialCases. */
        class SpecialCases implements ISpecialCases {

            /**
             * Constructs a new SpecialCases.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.ISpecialCases);

            /** SpecialCases normal. */
            public normal: string;

            /** SpecialCases default. */
            public default: string;

            /** SpecialCases function. */
            public function: string;

            /** SpecialCases var. */
            public var: string;

            /**
             * Creates a new SpecialCases instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SpecialCases instance
             */
            public static create(properties?: jspb.test.ISpecialCases): jspb.test.SpecialCases;

            /**
             * Encodes the specified SpecialCases message. Does not implicitly {@link jspb.test.SpecialCases.verify|verify} messages.
             * @param message SpecialCases message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.ISpecialCases, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SpecialCases message, length delimited. Does not implicitly {@link jspb.test.SpecialCases.verify|verify} messages.
             * @param message SpecialCases message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.ISpecialCases, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SpecialCases message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SpecialCases
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.SpecialCases;

            /**
             * Decodes a SpecialCases message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SpecialCases
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.SpecialCases;

            /**
             * Verifies a SpecialCases message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SpecialCases message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SpecialCases
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.SpecialCases;

            /**
             * Creates a plain object from a SpecialCases message. Also converts values to other types if specified.
             * @param message SpecialCases
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.SpecialCases, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SpecialCases to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OptionalFields. */
        interface IOptionalFields {

            /** OptionalFields aString */
            aString?: (string|null);

            /** OptionalFields aBool */
            aBool: boolean;

            /** OptionalFields aNestedMessage */
            aNestedMessage?: (jspb.test.OptionalFields.INested|null);

            /** OptionalFields aRepeatedMessage */
            aRepeatedMessage?: (jspb.test.OptionalFields.INested[]|null);

            /** OptionalFields aRepeatedString */
            aRepeatedString?: (string[]|null);
        }

        /** Represents an OptionalFields. */
        class OptionalFields implements IOptionalFields {

            /**
             * Constructs a new OptionalFields.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.IOptionalFields);

            /** OptionalFields aString. */
            public aString: string;

            /** OptionalFields aBool. */
            public aBool: boolean;

            /** OptionalFields aNestedMessage. */
            public aNestedMessage?: (jspb.test.OptionalFields.INested|null);

            /** OptionalFields aRepeatedMessage. */
            public aRepeatedMessage: jspb.test.OptionalFields.INested[];

            /** OptionalFields aRepeatedString. */
            public aRepeatedString: string[];

            /**
             * Creates a new OptionalFields instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OptionalFields instance
             */
            public static create(properties?: jspb.test.IOptionalFields): jspb.test.OptionalFields;

            /**
             * Encodes the specified OptionalFields message. Does not implicitly {@link jspb.test.OptionalFields.verify|verify} messages.
             * @param message OptionalFields message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.IOptionalFields, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OptionalFields message, length delimited. Does not implicitly {@link jspb.test.OptionalFields.verify|verify} messages.
             * @param message OptionalFields message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.IOptionalFields, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OptionalFields message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OptionalFields
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.OptionalFields;

            /**
             * Decodes an OptionalFields message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OptionalFields
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.OptionalFields;

            /**
             * Verifies an OptionalFields message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OptionalFields message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OptionalFields
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.OptionalFields;

            /**
             * Creates a plain object from an OptionalFields message. Also converts values to other types if specified.
             * @param message OptionalFields
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.OptionalFields, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OptionalFields to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace OptionalFields {

            /** Properties of a Nested. */
            interface INested {

                /** Nested anInt */
                anInt?: (number|null);
            }

            /** Represents a Nested. */
            class Nested implements INested {

                /**
                 * Constructs a new Nested.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: jspb.test.OptionalFields.INested);

                /** Nested anInt. */
                public anInt: number;

                /**
                 * Creates a new Nested instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Nested instance
                 */
                public static create(properties?: jspb.test.OptionalFields.INested): jspb.test.OptionalFields.Nested;

                /**
                 * Encodes the specified Nested message. Does not implicitly {@link jspb.test.OptionalFields.Nested.verify|verify} messages.
                 * @param message Nested message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: jspb.test.OptionalFields.INested, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Nested message, length delimited. Does not implicitly {@link jspb.test.OptionalFields.Nested.verify|verify} messages.
                 * @param message Nested message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: jspb.test.OptionalFields.INested, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Nested message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Nested
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.OptionalFields.Nested;

                /**
                 * Decodes a Nested message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Nested
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.OptionalFields.Nested;

                /**
                 * Verifies a Nested message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Nested message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Nested
                 */
                public static fromObject(object: { [k: string]: any }): jspb.test.OptionalFields.Nested;

                /**
                 * Creates a plain object from a Nested message. Also converts values to other types if specified.
                 * @param message Nested
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: jspb.test.OptionalFields.Nested, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Nested to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a HasExtensions. */
        interface IHasExtensions {

            /** HasExtensions str1 */
            str1?: (string|null);

            /** HasExtensions str2 */
            str2?: (string|null);

            /** HasExtensions str3 */
            str3?: (string|null);

            /** HasExtensions .jspb.test.IsExtension.extField */
            ".jspb.test.IsExtension.extField"?: (jspb.test.IIsExtension|null);

            /** HasExtensions .jspb.test.IndirectExtension.simple */
            ".jspb.test.IndirectExtension.simple"?: (jspb.test.ISimple1|null);

            /** HasExtensions .jspb.test.IndirectExtension.str */
            ".jspb.test.IndirectExtension.str"?: (string|null);

            /** HasExtensions .jspb.test.IndirectExtension.repeatedStr */
            ".jspb.test.IndirectExtension.repeatedStr"?: (string[]|null);

            /** HasExtensions .jspb.test.IndirectExtension.repeatedSimple */
            ".jspb.test.IndirectExtension.repeatedSimple"?: (jspb.test.ISimple1[]|null);

            /** HasExtensions .jspb.test.simple1 */
            ".jspb.test.simple1"?: (jspb.test.ISimple1|null);
        }

        /** Represents a HasExtensions. */
        class HasExtensions implements IHasExtensions {

            /**
             * Constructs a new HasExtensions.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.IHasExtensions);

            /** HasExtensions str1. */
            public str1: string;

            /** HasExtensions str2. */
            public str2: string;

            /** HasExtensions str3. */
            public str3: string;

            /**
             * Creates a new HasExtensions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HasExtensions instance
             */
            public static create(properties?: jspb.test.IHasExtensions): jspb.test.HasExtensions;

            /**
             * Encodes the specified HasExtensions message. Does not implicitly {@link jspb.test.HasExtensions.verify|verify} messages.
             * @param message HasExtensions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.IHasExtensions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HasExtensions message, length delimited. Does not implicitly {@link jspb.test.HasExtensions.verify|verify} messages.
             * @param message HasExtensions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.IHasExtensions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HasExtensions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HasExtensions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.HasExtensions;

            /**
             * Decodes a HasExtensions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HasExtensions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.HasExtensions;

            /**
             * Verifies a HasExtensions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HasExtensions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HasExtensions
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.HasExtensions;

            /**
             * Creates a plain object from a HasExtensions message. Also converts values to other types if specified.
             * @param message HasExtensions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.HasExtensions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HasExtensions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Complex. */
        interface IComplex {

            /** Complex aString */
            aString: string;

            /** Complex anOutOfOrderBool */
            anOutOfOrderBool?: (boolean|null);

            /** Complex aNestedMessage */
            aNestedMessage?: (jspb.test.Complex.INested|null);

            /** Complex aRepeatedMessage */
            aRepeatedMessage?: (jspb.test.Complex.INested[]|null);

            /** Complex aRepeatedString */
            aRepeatedString?: (string[]|null);

            /** Complex aFloatingPointField */
            aFloatingPointField?: (number|null);
        }

        /** Represents a Complex. */
        class Complex implements IComplex {

            /**
             * Constructs a new Complex.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.IComplex);

            /** Complex aString. */
            public aString: string;

            /** Complex anOutOfOrderBool. */
            public anOutOfOrderBool: boolean;

            /** Complex aNestedMessage. */
            public aNestedMessage?: (jspb.test.Complex.INested|null);

            /** Complex aRepeatedMessage. */
            public aRepeatedMessage: jspb.test.Complex.INested[];

            /** Complex aRepeatedString. */
            public aRepeatedString: string[];

            /** Complex aFloatingPointField. */
            public aFloatingPointField: number;

            /**
             * Creates a new Complex instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Complex instance
             */
            public static create(properties?: jspb.test.IComplex): jspb.test.Complex;

            /**
             * Encodes the specified Complex message. Does not implicitly {@link jspb.test.Complex.verify|verify} messages.
             * @param message Complex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.IComplex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Complex message, length delimited. Does not implicitly {@link jspb.test.Complex.verify|verify} messages.
             * @param message Complex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.IComplex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Complex message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Complex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Complex;

            /**
             * Decodes a Complex message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Complex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Complex;

            /**
             * Verifies a Complex message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Complex message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Complex
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.Complex;

            /**
             * Creates a plain object from a Complex message. Also converts values to other types if specified.
             * @param message Complex
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.Complex, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Complex to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Complex {

            /** Properties of a Nested. */
            interface INested {

                /** Nested anInt */
                anInt: number;
            }

            /** Represents a Nested. */
            class Nested implements INested {

                /**
                 * Constructs a new Nested.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: jspb.test.Complex.INested);

                /** Nested anInt. */
                public anInt: number;

                /**
                 * Creates a new Nested instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Nested instance
                 */
                public static create(properties?: jspb.test.Complex.INested): jspb.test.Complex.Nested;

                /**
                 * Encodes the specified Nested message. Does not implicitly {@link jspb.test.Complex.Nested.verify|verify} messages.
                 * @param message Nested message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: jspb.test.Complex.INested, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Nested message, length delimited. Does not implicitly {@link jspb.test.Complex.Nested.verify|verify} messages.
                 * @param message Nested message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: jspb.test.Complex.INested, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Nested message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Nested
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Complex.Nested;

                /**
                 * Decodes a Nested message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Nested
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Complex.Nested;

                /**
                 * Verifies a Nested message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Nested message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Nested
                 */
                public static fromObject(object: { [k: string]: any }): jspb.test.Complex.Nested;

                /**
                 * Creates a plain object from a Nested message. Also converts values to other types if specified.
                 * @param message Nested
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: jspb.test.Complex.Nested, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Nested to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an OuterMessage. */
        interface IOuterMessage {
        }

        /** Represents an OuterMessage. */
        class OuterMessage implements IOuterMessage {

            /**
             * Constructs a new OuterMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.IOuterMessage);

            /**
             * Creates a new OuterMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OuterMessage instance
             */
            public static create(properties?: jspb.test.IOuterMessage): jspb.test.OuterMessage;

            /**
             * Encodes the specified OuterMessage message. Does not implicitly {@link jspb.test.OuterMessage.verify|verify} messages.
             * @param message OuterMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.IOuterMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OuterMessage message, length delimited. Does not implicitly {@link jspb.test.OuterMessage.verify|verify} messages.
             * @param message OuterMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.IOuterMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OuterMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OuterMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.OuterMessage;

            /**
             * Decodes an OuterMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OuterMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.OuterMessage;

            /**
             * Verifies an OuterMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OuterMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OuterMessage
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.OuterMessage;

            /**
             * Creates a plain object from an OuterMessage message. Also converts values to other types if specified.
             * @param message OuterMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.OuterMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OuterMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace OuterMessage {

            /** Properties of a Complex. */
            interface IComplex {

                /** Complex innerComplexField */
                innerComplexField?: (number|null);
            }

            /** Represents a Complex. */
            class Complex implements IComplex {

                /**
                 * Constructs a new Complex.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: jspb.test.OuterMessage.IComplex);

                /** Complex innerComplexField. */
                public innerComplexField: number;

                /**
                 * Creates a new Complex instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Complex instance
                 */
                public static create(properties?: jspb.test.OuterMessage.IComplex): jspb.test.OuterMessage.Complex;

                /**
                 * Encodes the specified Complex message. Does not implicitly {@link jspb.test.OuterMessage.Complex.verify|verify} messages.
                 * @param message Complex message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: jspb.test.OuterMessage.IComplex, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Complex message, length delimited. Does not implicitly {@link jspb.test.OuterMessage.Complex.verify|verify} messages.
                 * @param message Complex message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: jspb.test.OuterMessage.IComplex, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Complex message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Complex
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.OuterMessage.Complex;

                /**
                 * Decodes a Complex message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Complex
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.OuterMessage.Complex;

                /**
                 * Verifies a Complex message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Complex message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Complex
                 */
                public static fromObject(object: { [k: string]: any }): jspb.test.OuterMessage.Complex;

                /**
                 * Creates a plain object from a Complex message. Also converts values to other types if specified.
                 * @param message Complex
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: jspb.test.OuterMessage.Complex, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Complex to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a MineField. */
        interface IMineField {

            /** MineField cookie */
            cookie?: (string|null);
        }

        /** Represents a MineField. */
        class MineField implements IMineField {

            /**
             * Constructs a new MineField.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.IMineField);

            /** MineField cookie. */
            public cookie: string;

            /**
             * Creates a new MineField instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MineField instance
             */
            public static create(properties?: jspb.test.IMineField): jspb.test.MineField;

            /**
             * Encodes the specified MineField message. Does not implicitly {@link jspb.test.MineField.verify|verify} messages.
             * @param message MineField message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.IMineField, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MineField message, length delimited. Does not implicitly {@link jspb.test.MineField.verify|verify} messages.
             * @param message MineField message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.IMineField, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MineField message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MineField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.MineField;

            /**
             * Decodes a MineField message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MineField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.MineField;

            /**
             * Verifies a MineField message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MineField message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MineField
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.MineField;

            /**
             * Creates a plain object from a MineField message. Also converts values to other types if specified.
             * @param message MineField
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.MineField, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MineField to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an IsExtension. */
        interface IIsExtension {

            /** IsExtension ext1 */
            ext1?: (string|null);
        }

        /** Represents an IsExtension. */
        class IsExtension implements IIsExtension {

            /**
             * Constructs a new IsExtension.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.IIsExtension);

            /** IsExtension ext1. */
            public ext1: string;

            /**
             * Creates a new IsExtension instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IsExtension instance
             */
            public static create(properties?: jspb.test.IIsExtension): jspb.test.IsExtension;

            /**
             * Encodes the specified IsExtension message. Does not implicitly {@link jspb.test.IsExtension.verify|verify} messages.
             * @param message IsExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.IIsExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IsExtension message, length delimited. Does not implicitly {@link jspb.test.IsExtension.verify|verify} messages.
             * @param message IsExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.IIsExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IsExtension message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IsExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.IsExtension;

            /**
             * Decodes an IsExtension message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IsExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.IsExtension;

            /**
             * Verifies an IsExtension message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IsExtension message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IsExtension
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.IsExtension;

            /**
             * Creates a plain object from an IsExtension message. Also converts values to other types if specified.
             * @param message IsExtension
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.IsExtension, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IsExtension to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an IndirectExtension. */
        interface IIndirectExtension {
        }

        /** Represents an IndirectExtension. */
        class IndirectExtension implements IIndirectExtension {

            /**
             * Constructs a new IndirectExtension.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.IIndirectExtension);

            /**
             * Creates a new IndirectExtension instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IndirectExtension instance
             */
            public static create(properties?: jspb.test.IIndirectExtension): jspb.test.IndirectExtension;

            /**
             * Encodes the specified IndirectExtension message. Does not implicitly {@link jspb.test.IndirectExtension.verify|verify} messages.
             * @param message IndirectExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.IIndirectExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IndirectExtension message, length delimited. Does not implicitly {@link jspb.test.IndirectExtension.verify|verify} messages.
             * @param message IndirectExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.IIndirectExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IndirectExtension message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IndirectExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.IndirectExtension;

            /**
             * Decodes an IndirectExtension message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IndirectExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.IndirectExtension;

            /**
             * Verifies an IndirectExtension message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IndirectExtension message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IndirectExtension
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.IndirectExtension;

            /**
             * Creates a plain object from an IndirectExtension message. Also converts values to other types if specified.
             * @param message IndirectExtension
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.IndirectExtension, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IndirectExtension to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DefaultValues. */
        interface IDefaultValues {

            /** DefaultValues stringField */
            stringField?: (string|null);

            /** DefaultValues boolField */
            boolField?: (boolean|null);

            /** DefaultValues intField */
            intField?: (Long|null);

            /** DefaultValues enumField */
            enumField?: (jspb.test.DefaultValues.Enum|null);

            /** DefaultValues emptyField */
            emptyField?: (string|null);

            /** DefaultValues bytesField */
            bytesField?: (Uint8Array|null);
        }

        /** Represents a DefaultValues. */
        class DefaultValues implements IDefaultValues {

            /**
             * Constructs a new DefaultValues.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.IDefaultValues);

            /** DefaultValues stringField. */
            public stringField: string;

            /** DefaultValues boolField. */
            public boolField: boolean;

            /** DefaultValues intField. */
            public intField: Long;

            /** DefaultValues enumField. */
            public enumField: jspb.test.DefaultValues.Enum;

            /** DefaultValues emptyField. */
            public emptyField: string;

            /** DefaultValues bytesField. */
            public bytesField: Uint8Array;

            /**
             * Creates a new DefaultValues instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DefaultValues instance
             */
            public static create(properties?: jspb.test.IDefaultValues): jspb.test.DefaultValues;

            /**
             * Encodes the specified DefaultValues message. Does not implicitly {@link jspb.test.DefaultValues.verify|verify} messages.
             * @param message DefaultValues message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.IDefaultValues, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DefaultValues message, length delimited. Does not implicitly {@link jspb.test.DefaultValues.verify|verify} messages.
             * @param message DefaultValues message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.IDefaultValues, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DefaultValues message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DefaultValues
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.DefaultValues;

            /**
             * Decodes a DefaultValues message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DefaultValues
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.DefaultValues;

            /**
             * Verifies a DefaultValues message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DefaultValues message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DefaultValues
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.DefaultValues;

            /**
             * Creates a plain object from a DefaultValues message. Also converts values to other types if specified.
             * @param message DefaultValues
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.DefaultValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DefaultValues to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DefaultValues {

            /** Enum enum. */
            enum Enum {
                E1 = 13,
                E2 = 77
            }
        }

        /** Properties of a FloatingPointFields. */
        interface IFloatingPointFields {

            /** FloatingPointFields optionalFloatField */
            optionalFloatField?: (number|null);

            /** FloatingPointFields requiredFloatField */
            requiredFloatField: number;

            /** FloatingPointFields repeatedFloatField */
            repeatedFloatField?: (number[]|null);

            /** FloatingPointFields defaultFloatField */
            defaultFloatField?: (number|null);

            /** FloatingPointFields optionalDoubleField */
            optionalDoubleField?: (number|null);

            /** FloatingPointFields requiredDoubleField */
            requiredDoubleField: number;

            /** FloatingPointFields repeatedDoubleField */
            repeatedDoubleField?: (number[]|null);

            /** FloatingPointFields defaultDoubleField */
            defaultDoubleField?: (number|null);
        }

        /** Represents a FloatingPointFields. */
        class FloatingPointFields implements IFloatingPointFields {

            /**
             * Constructs a new FloatingPointFields.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.IFloatingPointFields);

            /** FloatingPointFields optionalFloatField. */
            public optionalFloatField: number;

            /** FloatingPointFields requiredFloatField. */
            public requiredFloatField: number;

            /** FloatingPointFields repeatedFloatField. */
            public repeatedFloatField: number[];

            /** FloatingPointFields defaultFloatField. */
            public defaultFloatField: number;

            /** FloatingPointFields optionalDoubleField. */
            public optionalDoubleField: number;

            /** FloatingPointFields requiredDoubleField. */
            public requiredDoubleField: number;

            /** FloatingPointFields repeatedDoubleField. */
            public repeatedDoubleField: number[];

            /** FloatingPointFields defaultDoubleField. */
            public defaultDoubleField: number;

            /**
             * Creates a new FloatingPointFields instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatingPointFields instance
             */
            public static create(properties?: jspb.test.IFloatingPointFields): jspb.test.FloatingPointFields;

            /**
             * Encodes the specified FloatingPointFields message. Does not implicitly {@link jspb.test.FloatingPointFields.verify|verify} messages.
             * @param message FloatingPointFields message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.IFloatingPointFields, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatingPointFields message, length delimited. Does not implicitly {@link jspb.test.FloatingPointFields.verify|verify} messages.
             * @param message FloatingPointFields message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.IFloatingPointFields, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatingPointFields message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatingPointFields
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.FloatingPointFields;

            /**
             * Decodes a FloatingPointFields message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatingPointFields
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.FloatingPointFields;

            /**
             * Verifies a FloatingPointFields message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatingPointFields message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatingPointFields
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.FloatingPointFields;

            /**
             * Creates a plain object from a FloatingPointFields message. Also converts values to other types if specified.
             * @param message FloatingPointFields
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.FloatingPointFields, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatingPointFields to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BooleanFields. */
        interface IBooleanFields {

            /** BooleanFields optionalBooleanField */
            optionalBooleanField?: (boolean|null);

            /** BooleanFields requiredBooleanField */
            requiredBooleanField: boolean;

            /** BooleanFields repeatedBooleanField */
            repeatedBooleanField?: (boolean[]|null);

            /** BooleanFields defaultBooleanField */
            defaultBooleanField?: (boolean|null);
        }

        /** Represents a BooleanFields. */
        class BooleanFields implements IBooleanFields {

            /**
             * Constructs a new BooleanFields.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.IBooleanFields);

            /** BooleanFields optionalBooleanField. */
            public optionalBooleanField: boolean;

            /** BooleanFields requiredBooleanField. */
            public requiredBooleanField: boolean;

            /** BooleanFields repeatedBooleanField. */
            public repeatedBooleanField: boolean[];

            /** BooleanFields defaultBooleanField. */
            public defaultBooleanField: boolean;

            /**
             * Creates a new BooleanFields instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BooleanFields instance
             */
            public static create(properties?: jspb.test.IBooleanFields): jspb.test.BooleanFields;

            /**
             * Encodes the specified BooleanFields message. Does not implicitly {@link jspb.test.BooleanFields.verify|verify} messages.
             * @param message BooleanFields message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.IBooleanFields, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BooleanFields message, length delimited. Does not implicitly {@link jspb.test.BooleanFields.verify|verify} messages.
             * @param message BooleanFields message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.IBooleanFields, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BooleanFields message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BooleanFields
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.BooleanFields;

            /**
             * Decodes a BooleanFields message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BooleanFields
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.BooleanFields;

            /**
             * Verifies a BooleanFields message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BooleanFields message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BooleanFields
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.BooleanFields;

            /**
             * Creates a plain object from a BooleanFields message. Also converts values to other types if specified.
             * @param message BooleanFields
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.BooleanFields, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BooleanFields to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TestClone. */
        interface ITestClone {

            /** TestClone str */
            str?: (string|null);

            /** TestClone simple1 */
            simple1?: (jspb.test.ISimple1|null);

            /** TestClone simple2 */
            simple2?: (jspb.test.ISimple1[]|null);

            /** TestClone bytesField */
            bytesField?: (Uint8Array|null);

            /** TestClone unused */
            unused?: (string|null);

            /** TestClone .jspb.test.TestCloneExtension.lowExt */
            ".jspb.test.TestCloneExtension.lowExt"?: (jspb.test.ITestCloneExtension|null);

            /** TestClone .jspb.test.CloneExtension.extField */
            ".jspb.test.CloneExtension.extField"?: (jspb.test.ICloneExtension|null);
        }

        /** Represents a TestClone. */
        class TestClone implements ITestClone {

            /**
             * Constructs a new TestClone.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.ITestClone);

            /** TestClone str. */
            public str: string;

            /** TestClone simple1. */
            public simple1?: (jspb.test.ISimple1|null);

            /** TestClone simple2. */
            public simple2: jspb.test.ISimple1[];

            /** TestClone bytesField. */
            public bytesField: Uint8Array;

            /** TestClone unused. */
            public unused: string;

            /**
             * Creates a new TestClone instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestClone instance
             */
            public static create(properties?: jspb.test.ITestClone): jspb.test.TestClone;

            /**
             * Encodes the specified TestClone message. Does not implicitly {@link jspb.test.TestClone.verify|verify} messages.
             * @param message TestClone message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.ITestClone, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestClone message, length delimited. Does not implicitly {@link jspb.test.TestClone.verify|verify} messages.
             * @param message TestClone message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.ITestClone, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestClone message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestClone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestClone;

            /**
             * Decodes a TestClone message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestClone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestClone;

            /**
             * Verifies a TestClone message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestClone message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestClone
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.TestClone;

            /**
             * Creates a plain object from a TestClone message. Also converts values to other types if specified.
             * @param message TestClone
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.TestClone, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestClone to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TestCloneExtension. */
        interface ITestCloneExtension {

            /** TestCloneExtension f */
            f?: (number|null);
        }

        /** Represents a TestCloneExtension. */
        class TestCloneExtension implements ITestCloneExtension {

            /**
             * Constructs a new TestCloneExtension.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.ITestCloneExtension);

            /** TestCloneExtension f. */
            public f: number;

            /**
             * Creates a new TestCloneExtension instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestCloneExtension instance
             */
            public static create(properties?: jspb.test.ITestCloneExtension): jspb.test.TestCloneExtension;

            /**
             * Encodes the specified TestCloneExtension message. Does not implicitly {@link jspb.test.TestCloneExtension.verify|verify} messages.
             * @param message TestCloneExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.ITestCloneExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestCloneExtension message, length delimited. Does not implicitly {@link jspb.test.TestCloneExtension.verify|verify} messages.
             * @param message TestCloneExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.ITestCloneExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestCloneExtension message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestCloneExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestCloneExtension;

            /**
             * Decodes a TestCloneExtension message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestCloneExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestCloneExtension;

            /**
             * Verifies a TestCloneExtension message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestCloneExtension message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestCloneExtension
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.TestCloneExtension;

            /**
             * Creates a plain object from a TestCloneExtension message. Also converts values to other types if specified.
             * @param message TestCloneExtension
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.TestCloneExtension, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestCloneExtension to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CloneExtension. */
        interface ICloneExtension {

            /** CloneExtension ext */
            ext?: (string|null);
        }

        /** Represents a CloneExtension. */
        class CloneExtension implements ICloneExtension {

            /**
             * Constructs a new CloneExtension.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.ICloneExtension);

            /** CloneExtension ext. */
            public ext: string;

            /**
             * Creates a new CloneExtension instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CloneExtension instance
             */
            public static create(properties?: jspb.test.ICloneExtension): jspb.test.CloneExtension;

            /**
             * Encodes the specified CloneExtension message. Does not implicitly {@link jspb.test.CloneExtension.verify|verify} messages.
             * @param message CloneExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.ICloneExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CloneExtension message, length delimited. Does not implicitly {@link jspb.test.CloneExtension.verify|verify} messages.
             * @param message CloneExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.ICloneExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CloneExtension message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CloneExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.CloneExtension;

            /**
             * Decodes a CloneExtension message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CloneExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.CloneExtension;

            /**
             * Verifies a CloneExtension message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CloneExtension message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CloneExtension
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.CloneExtension;

            /**
             * Creates a plain object from a CloneExtension message. Also converts values to other types if specified.
             * @param message CloneExtension
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.CloneExtension, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CloneExtension to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TestGroup. */
        interface ITestGroup {

            /** TestGroup repeatedGroup */
            repeatedGroup?: (jspb.test.TestGroup.IRepeatedGroup[]|null);

            /** TestGroup requiredGroup */
            requiredGroup: jspb.test.TestGroup.IRequiredGroup;

            /** TestGroup optionalGroup */
            optionalGroup?: (jspb.test.TestGroup.IOptionalGroup|null);

            /** TestGroup id */
            id?: (string|null);

            /** TestGroup requiredSimple */
            requiredSimple: jspb.test.ISimple2;

            /** TestGroup optionalSimple */
            optionalSimple?: (jspb.test.ISimple2|null);
        }

        /** Represents a TestGroup. */
        class TestGroup implements ITestGroup {

            /**
             * Constructs a new TestGroup.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.ITestGroup);

            /** TestGroup repeatedGroup. */
            public repeatedGroup: jspb.test.TestGroup.IRepeatedGroup[];

            /** TestGroup requiredGroup. */
            public requiredGroup: jspb.test.TestGroup.IRequiredGroup;

            /** TestGroup optionalGroup. */
            public optionalGroup?: (jspb.test.TestGroup.IOptionalGroup|null);

            /** TestGroup id. */
            public id: string;

            /** TestGroup requiredSimple. */
            public requiredSimple: jspb.test.ISimple2;

            /** TestGroup optionalSimple. */
            public optionalSimple?: (jspb.test.ISimple2|null);

            /**
             * Creates a new TestGroup instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestGroup instance
             */
            public static create(properties?: jspb.test.ITestGroup): jspb.test.TestGroup;

            /**
             * Encodes the specified TestGroup message. Does not implicitly {@link jspb.test.TestGroup.verify|verify} messages.
             * @param message TestGroup message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.ITestGroup, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestGroup message, length delimited. Does not implicitly {@link jspb.test.TestGroup.verify|verify} messages.
             * @param message TestGroup message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.ITestGroup, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestGroup message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestGroup;

            /**
             * Decodes a TestGroup message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestGroup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestGroup;

            /**
             * Verifies a TestGroup message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestGroup message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestGroup
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.TestGroup;

            /**
             * Creates a plain object from a TestGroup message. Also converts values to other types if specified.
             * @param message TestGroup
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.TestGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestGroup to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace TestGroup {

            /** Properties of a RepeatedGroup. */
            interface IRepeatedGroup {

                /** RepeatedGroup id */
                id: string;

                /** RepeatedGroup someBool */
                someBool?: (boolean[]|null);
            }

            /** Represents a RepeatedGroup. */
            class RepeatedGroup implements IRepeatedGroup {

                /**
                 * Constructs a new RepeatedGroup.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: jspb.test.TestGroup.IRepeatedGroup);

                /** RepeatedGroup id. */
                public id: string;

                /** RepeatedGroup someBool. */
                public someBool: boolean[];

                /**
                 * Creates a new RepeatedGroup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RepeatedGroup instance
                 */
                public static create(properties?: jspb.test.TestGroup.IRepeatedGroup): jspb.test.TestGroup.RepeatedGroup;

                /**
                 * Encodes the specified RepeatedGroup message. Does not implicitly {@link jspb.test.TestGroup.RepeatedGroup.verify|verify} messages.
                 * @param message RepeatedGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: jspb.test.TestGroup.IRepeatedGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RepeatedGroup message, length delimited. Does not implicitly {@link jspb.test.TestGroup.RepeatedGroup.verify|verify} messages.
                 * @param message RepeatedGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: jspb.test.TestGroup.IRepeatedGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RepeatedGroup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RepeatedGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestGroup.RepeatedGroup;

                /**
                 * Decodes a RepeatedGroup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RepeatedGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestGroup.RepeatedGroup;

                /**
                 * Verifies a RepeatedGroup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RepeatedGroup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RepeatedGroup
                 */
                public static fromObject(object: { [k: string]: any }): jspb.test.TestGroup.RepeatedGroup;

                /**
                 * Creates a plain object from a RepeatedGroup message. Also converts values to other types if specified.
                 * @param message RepeatedGroup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: jspb.test.TestGroup.RepeatedGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RepeatedGroup to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RequiredGroup. */
            interface IRequiredGroup {

                /** RequiredGroup id */
                id: string;
            }

            /** Represents a RequiredGroup. */
            class RequiredGroup implements IRequiredGroup {

                /**
                 * Constructs a new RequiredGroup.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: jspb.test.TestGroup.IRequiredGroup);

                /** RequiredGroup id. */
                public id: string;

                /**
                 * Creates a new RequiredGroup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RequiredGroup instance
                 */
                public static create(properties?: jspb.test.TestGroup.IRequiredGroup): jspb.test.TestGroup.RequiredGroup;

                /**
                 * Encodes the specified RequiredGroup message. Does not implicitly {@link jspb.test.TestGroup.RequiredGroup.verify|verify} messages.
                 * @param message RequiredGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: jspb.test.TestGroup.IRequiredGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RequiredGroup message, length delimited. Does not implicitly {@link jspb.test.TestGroup.RequiredGroup.verify|verify} messages.
                 * @param message RequiredGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: jspb.test.TestGroup.IRequiredGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RequiredGroup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RequiredGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestGroup.RequiredGroup;

                /**
                 * Decodes a RequiredGroup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RequiredGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestGroup.RequiredGroup;

                /**
                 * Verifies a RequiredGroup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RequiredGroup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RequiredGroup
                 */
                public static fromObject(object: { [k: string]: any }): jspb.test.TestGroup.RequiredGroup;

                /**
                 * Creates a plain object from a RequiredGroup message. Also converts values to other types if specified.
                 * @param message RequiredGroup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: jspb.test.TestGroup.RequiredGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RequiredGroup to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OptionalGroup. */
            interface IOptionalGroup {

                /** OptionalGroup id */
                id: string;
            }

            /** Represents an OptionalGroup. */
            class OptionalGroup implements IOptionalGroup {

                /**
                 * Constructs a new OptionalGroup.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: jspb.test.TestGroup.IOptionalGroup);

                /** OptionalGroup id. */
                public id: string;

                /**
                 * Creates a new OptionalGroup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OptionalGroup instance
                 */
                public static create(properties?: jspb.test.TestGroup.IOptionalGroup): jspb.test.TestGroup.OptionalGroup;

                /**
                 * Encodes the specified OptionalGroup message. Does not implicitly {@link jspb.test.TestGroup.OptionalGroup.verify|verify} messages.
                 * @param message OptionalGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: jspb.test.TestGroup.IOptionalGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OptionalGroup message, length delimited. Does not implicitly {@link jspb.test.TestGroup.OptionalGroup.verify|verify} messages.
                 * @param message OptionalGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: jspb.test.TestGroup.IOptionalGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OptionalGroup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OptionalGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestGroup.OptionalGroup;

                /**
                 * Decodes an OptionalGroup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OptionalGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestGroup.OptionalGroup;

                /**
                 * Verifies an OptionalGroup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OptionalGroup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OptionalGroup
                 */
                public static fromObject(object: { [k: string]: any }): jspb.test.TestGroup.OptionalGroup;

                /**
                 * Creates a plain object from an OptionalGroup message. Also converts values to other types if specified.
                 * @param message OptionalGroup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: jspb.test.TestGroup.OptionalGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OptionalGroup to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a TestGroup1. */
        interface ITestGroup1 {

            /** TestGroup1 group */
            group?: (jspb.test.TestGroup.IRepeatedGroup|null);
        }

        /** Represents a TestGroup1. */
        class TestGroup1 implements ITestGroup1 {

            /**
             * Constructs a new TestGroup1.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.ITestGroup1);

            /** TestGroup1 group. */
            public group?: (jspb.test.TestGroup.IRepeatedGroup|null);

            /**
             * Creates a new TestGroup1 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestGroup1 instance
             */
            public static create(properties?: jspb.test.ITestGroup1): jspb.test.TestGroup1;

            /**
             * Encodes the specified TestGroup1 message. Does not implicitly {@link jspb.test.TestGroup1.verify|verify} messages.
             * @param message TestGroup1 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.ITestGroup1, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestGroup1 message, length delimited. Does not implicitly {@link jspb.test.TestGroup1.verify|verify} messages.
             * @param message TestGroup1 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.ITestGroup1, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestGroup1 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestGroup1
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestGroup1;

            /**
             * Decodes a TestGroup1 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestGroup1
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestGroup1;

            /**
             * Verifies a TestGroup1 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestGroup1 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestGroup1
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.TestGroup1;

            /**
             * Creates a plain object from a TestGroup1 message. Also converts values to other types if specified.
             * @param message TestGroup1
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.TestGroup1, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestGroup1 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TestReservedNames. */
        interface ITestReservedNames {

            /** TestReservedNames extension */
            extension?: (number|null);

            /** TestReservedNames .jspb.test.TestReservedNamesExtension.foo */
            ".jspb.test.TestReservedNamesExtension.foo"?: (number|null);
        }

        /** Represents a TestReservedNames. */
        class TestReservedNames implements ITestReservedNames {

            /**
             * Constructs a new TestReservedNames.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.ITestReservedNames);

            /** TestReservedNames extension. */
            public extension: number;

            /**
             * Creates a new TestReservedNames instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestReservedNames instance
             */
            public static create(properties?: jspb.test.ITestReservedNames): jspb.test.TestReservedNames;

            /**
             * Encodes the specified TestReservedNames message. Does not implicitly {@link jspb.test.TestReservedNames.verify|verify} messages.
             * @param message TestReservedNames message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.ITestReservedNames, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestReservedNames message, length delimited. Does not implicitly {@link jspb.test.TestReservedNames.verify|verify} messages.
             * @param message TestReservedNames message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.ITestReservedNames, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestReservedNames message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestReservedNames
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestReservedNames;

            /**
             * Decodes a TestReservedNames message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestReservedNames
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestReservedNames;

            /**
             * Verifies a TestReservedNames message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestReservedNames message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestReservedNames
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.TestReservedNames;

            /**
             * Creates a plain object from a TestReservedNames message. Also converts values to other types if specified.
             * @param message TestReservedNames
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.TestReservedNames, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestReservedNames to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TestReservedNamesExtension. */
        interface ITestReservedNamesExtension {
        }

        /** Represents a TestReservedNamesExtension. */
        class TestReservedNamesExtension implements ITestReservedNamesExtension {

            /**
             * Constructs a new TestReservedNamesExtension.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.ITestReservedNamesExtension);

            /**
             * Creates a new TestReservedNamesExtension instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestReservedNamesExtension instance
             */
            public static create(properties?: jspb.test.ITestReservedNamesExtension): jspb.test.TestReservedNamesExtension;

            /**
             * Encodes the specified TestReservedNamesExtension message. Does not implicitly {@link jspb.test.TestReservedNamesExtension.verify|verify} messages.
             * @param message TestReservedNamesExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.ITestReservedNamesExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestReservedNamesExtension message, length delimited. Does not implicitly {@link jspb.test.TestReservedNamesExtension.verify|verify} messages.
             * @param message TestReservedNamesExtension message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.ITestReservedNamesExtension, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestReservedNamesExtension message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestReservedNamesExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestReservedNamesExtension;

            /**
             * Decodes a TestReservedNamesExtension message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestReservedNamesExtension
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestReservedNamesExtension;

            /**
             * Verifies a TestReservedNamesExtension message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestReservedNamesExtension message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestReservedNamesExtension
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.TestReservedNamesExtension;

            /**
             * Creates a plain object from a TestReservedNamesExtension message. Also converts values to other types if specified.
             * @param message TestReservedNamesExtension
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.TestReservedNamesExtension, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestReservedNamesExtension to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TestMessageWithOneof. */
        interface ITestMessageWithOneof {

            /** TestMessageWithOneof pone */
            pone?: (string|null);

            /** TestMessageWithOneof pthree */
            pthree?: (string|null);

            /** TestMessageWithOneof rone */
            rone?: (jspb.test.ITestMessageWithOneof|null);

            /** TestMessageWithOneof rtwo */
            rtwo?: (string|null);

            /** TestMessageWithOneof normalField */
            normalField?: (boolean|null);

            /** TestMessageWithOneof repeatedField */
            repeatedField?: (string[]|null);

            /** TestMessageWithOneof aone */
            aone?: (number|null);

            /** TestMessageWithOneof atwo */
            atwo?: (number|null);

            /** TestMessageWithOneof bone */
            bone?: (number|null);

            /** TestMessageWithOneof btwo */
            btwo?: (number|null);
        }

        /** Represents a TestMessageWithOneof. */
        class TestMessageWithOneof implements ITestMessageWithOneof {

            /**
             * Constructs a new TestMessageWithOneof.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.ITestMessageWithOneof);

            /** TestMessageWithOneof pone. */
            public pone: string;

            /** TestMessageWithOneof pthree. */
            public pthree: string;

            /** TestMessageWithOneof rone. */
            public rone?: (jspb.test.ITestMessageWithOneof|null);

            /** TestMessageWithOneof rtwo. */
            public rtwo: string;

            /** TestMessageWithOneof normalField. */
            public normalField: boolean;

            /** TestMessageWithOneof repeatedField. */
            public repeatedField: string[];

            /** TestMessageWithOneof aone. */
            public aone: number;

            /** TestMessageWithOneof atwo. */
            public atwo: number;

            /** TestMessageWithOneof bone. */
            public bone: number;

            /** TestMessageWithOneof btwo. */
            public btwo: number;

            /** TestMessageWithOneof partialOneof. */
            public partialOneof?: ("pone"|"pthree");

            /** TestMessageWithOneof recursiveOneof. */
            public recursiveOneof?: ("rone"|"rtwo");

            /** TestMessageWithOneof defaultOneofA. */
            public defaultOneofA?: ("aone"|"atwo");

            /** TestMessageWithOneof defaultOneofB. */
            public defaultOneofB?: ("bone"|"btwo");

            /**
             * Creates a new TestMessageWithOneof instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestMessageWithOneof instance
             */
            public static create(properties?: jspb.test.ITestMessageWithOneof): jspb.test.TestMessageWithOneof;

            /**
             * Encodes the specified TestMessageWithOneof message. Does not implicitly {@link jspb.test.TestMessageWithOneof.verify|verify} messages.
             * @param message TestMessageWithOneof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.ITestMessageWithOneof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestMessageWithOneof message, length delimited. Does not implicitly {@link jspb.test.TestMessageWithOneof.verify|verify} messages.
             * @param message TestMessageWithOneof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.ITestMessageWithOneof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestMessageWithOneof message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestMessageWithOneof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestMessageWithOneof;

            /**
             * Decodes a TestMessageWithOneof message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestMessageWithOneof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestMessageWithOneof;

            /**
             * Verifies a TestMessageWithOneof message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestMessageWithOneof message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestMessageWithOneof
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.TestMessageWithOneof;

            /**
             * Creates a plain object from a TestMessageWithOneof message. Also converts values to other types if specified.
             * @param message TestMessageWithOneof
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.TestMessageWithOneof, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestMessageWithOneof to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TestEndsWithBytes. */
        interface ITestEndsWithBytes {

            /** TestEndsWithBytes value */
            value?: (number|null);

            /** TestEndsWithBytes data */
            data?: (Uint8Array|null);
        }

        /** Represents a TestEndsWithBytes. */
        class TestEndsWithBytes implements ITestEndsWithBytes {

            /**
             * Constructs a new TestEndsWithBytes.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.ITestEndsWithBytes);

            /** TestEndsWithBytes value. */
            public value: number;

            /** TestEndsWithBytes data. */
            public data: Uint8Array;

            /**
             * Creates a new TestEndsWithBytes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestEndsWithBytes instance
             */
            public static create(properties?: jspb.test.ITestEndsWithBytes): jspb.test.TestEndsWithBytes;

            /**
             * Encodes the specified TestEndsWithBytes message. Does not implicitly {@link jspb.test.TestEndsWithBytes.verify|verify} messages.
             * @param message TestEndsWithBytes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.ITestEndsWithBytes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestEndsWithBytes message, length delimited. Does not implicitly {@link jspb.test.TestEndsWithBytes.verify|verify} messages.
             * @param message TestEndsWithBytes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.ITestEndsWithBytes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestEndsWithBytes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestEndsWithBytes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestEndsWithBytes;

            /**
             * Decodes a TestEndsWithBytes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestEndsWithBytes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestEndsWithBytes;

            /**
             * Verifies a TestEndsWithBytes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestEndsWithBytes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestEndsWithBytes
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.TestEndsWithBytes;

            /**
             * Creates a plain object from a TestEndsWithBytes message. Also converts values to other types if specified.
             * @param message TestEndsWithBytes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.TestEndsWithBytes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestEndsWithBytes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TestLastFieldBeforePivot. */
        interface ITestLastFieldBeforePivot {

            /** TestLastFieldBeforePivot lastFieldBeforePivot */
            lastFieldBeforePivot?: (number|null);

            /** TestLastFieldBeforePivot .jspb.test.extendTestLastFieldBeforePivotField */
            ".jspb.test.extendTestLastFieldBeforePivotField"?: (number|null);
        }

        /** Represents a TestLastFieldBeforePivot. */
        class TestLastFieldBeforePivot implements ITestLastFieldBeforePivot {

            /**
             * Constructs a new TestLastFieldBeforePivot.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.ITestLastFieldBeforePivot);

            /** TestLastFieldBeforePivot lastFieldBeforePivot. */
            public lastFieldBeforePivot: number;

            /**
             * Creates a new TestLastFieldBeforePivot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestLastFieldBeforePivot instance
             */
            public static create(properties?: jspb.test.ITestLastFieldBeforePivot): jspb.test.TestLastFieldBeforePivot;

            /**
             * Encodes the specified TestLastFieldBeforePivot message. Does not implicitly {@link jspb.test.TestLastFieldBeforePivot.verify|verify} messages.
             * @param message TestLastFieldBeforePivot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.ITestLastFieldBeforePivot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestLastFieldBeforePivot message, length delimited. Does not implicitly {@link jspb.test.TestLastFieldBeforePivot.verify|verify} messages.
             * @param message TestLastFieldBeforePivot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.ITestLastFieldBeforePivot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestLastFieldBeforePivot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestLastFieldBeforePivot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestLastFieldBeforePivot;

            /**
             * Decodes a TestLastFieldBeforePivot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestLastFieldBeforePivot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestLastFieldBeforePivot;

            /**
             * Verifies a TestLastFieldBeforePivot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestLastFieldBeforePivot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestLastFieldBeforePivot
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.TestLastFieldBeforePivot;

            /**
             * Creates a plain object from a TestLastFieldBeforePivot message. Also converts values to other types if specified.
             * @param message TestLastFieldBeforePivot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.TestLastFieldBeforePivot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestLastFieldBeforePivot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int64Types. */
        interface IInt64Types {

            /** Int64Types int64Normal */
            int64Normal?: (Long|null);

            /** Int64Types int64String */
            int64String?: (Long|null);

            /** Int64Types int64Number */
            int64Number?: (Long|null);
        }

        /** Represents an Int64Types. */
        class Int64Types implements IInt64Types {

            /**
             * Constructs a new Int64Types.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.IInt64Types);

            /** Int64Types int64Normal. */
            public int64Normal: Long;

            /** Int64Types int64String. */
            public int64String: Long;

            /** Int64Types int64Number. */
            public int64Number: Long;

            /**
             * Creates a new Int64Types instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Types instance
             */
            public static create(properties?: jspb.test.IInt64Types): jspb.test.Int64Types;

            /**
             * Encodes the specified Int64Types message. Does not implicitly {@link jspb.test.Int64Types.verify|verify} messages.
             * @param message Int64Types message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.IInt64Types, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Types message, length delimited. Does not implicitly {@link jspb.test.Int64Types.verify|verify} messages.
             * @param message Int64Types message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.IInt64Types, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Types message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Types
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Int64Types;

            /**
             * Decodes an Int64Types message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Types
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Int64Types;

            /**
             * Verifies an Int64Types message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Types message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Types
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.Int64Types;

            /**
             * Creates a plain object from an Int64Types message. Also converts values to other types if specified.
             * @param message Int64Types
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.Int64Types, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Types to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TestMapFieldsNoBinary. */
        interface ITestMapFieldsNoBinary {

            /** TestMapFieldsNoBinary mapStringString */
            mapStringString?: ({ [k: string]: string }|null);

            /** TestMapFieldsNoBinary mapStringInt32 */
            mapStringInt32?: ({ [k: string]: number }|null);

            /** TestMapFieldsNoBinary mapStringInt64 */
            mapStringInt64?: ({ [k: string]: Long }|null);

            /** TestMapFieldsNoBinary mapStringBool */
            mapStringBool?: ({ [k: string]: boolean }|null);

            /** TestMapFieldsNoBinary mapStringDouble */
            mapStringDouble?: ({ [k: string]: number }|null);

            /** TestMapFieldsNoBinary mapStringEnum */
            mapStringEnum?: ({ [k: string]: jspb.test.MapValueEnumNoBinary }|null);

            /** TestMapFieldsNoBinary mapStringMsg */
            mapStringMsg?: ({ [k: string]: jspb.test.IMapValueMessageNoBinary }|null);

            /** TestMapFieldsNoBinary mapInt32String */
            mapInt32String?: ({ [k: string]: string }|null);

            /** TestMapFieldsNoBinary mapInt64String */
            mapInt64String?: ({ [k: string]: string }|null);

            /** TestMapFieldsNoBinary mapBoolString */
            mapBoolString?: ({ [k: string]: string }|null);

            /** TestMapFieldsNoBinary testMapFields */
            testMapFields?: (jspb.test.ITestMapFieldsNoBinary|null);

            /** TestMapFieldsNoBinary mapStringTestmapfields */
            mapStringTestmapfields?: ({ [k: string]: jspb.test.ITestMapFieldsNoBinary }|null);
        }

        /** Represents a TestMapFieldsNoBinary. */
        class TestMapFieldsNoBinary implements ITestMapFieldsNoBinary {

            /**
             * Constructs a new TestMapFieldsNoBinary.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.ITestMapFieldsNoBinary);

            /** TestMapFieldsNoBinary mapStringString. */
            public mapStringString: { [k: string]: string };

            /** TestMapFieldsNoBinary mapStringInt32. */
            public mapStringInt32: { [k: string]: number };

            /** TestMapFieldsNoBinary mapStringInt64. */
            public mapStringInt64: { [k: string]: Long };

            /** TestMapFieldsNoBinary mapStringBool. */
            public mapStringBool: { [k: string]: boolean };

            /** TestMapFieldsNoBinary mapStringDouble. */
            public mapStringDouble: { [k: string]: number };

            /** TestMapFieldsNoBinary mapStringEnum. */
            public mapStringEnum: { [k: string]: jspb.test.MapValueEnumNoBinary };

            /** TestMapFieldsNoBinary mapStringMsg. */
            public mapStringMsg: { [k: string]: jspb.test.IMapValueMessageNoBinary };

            /** TestMapFieldsNoBinary mapInt32String. */
            public mapInt32String: { [k: string]: string };

            /** TestMapFieldsNoBinary mapInt64String. */
            public mapInt64String: { [k: string]: string };

            /** TestMapFieldsNoBinary mapBoolString. */
            public mapBoolString: { [k: string]: string };

            /** TestMapFieldsNoBinary testMapFields. */
            public testMapFields?: (jspb.test.ITestMapFieldsNoBinary|null);

            /** TestMapFieldsNoBinary mapStringTestmapfields. */
            public mapStringTestmapfields: { [k: string]: jspb.test.ITestMapFieldsNoBinary };

            /**
             * Creates a new TestMapFieldsNoBinary instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestMapFieldsNoBinary instance
             */
            public static create(properties?: jspb.test.ITestMapFieldsNoBinary): jspb.test.TestMapFieldsNoBinary;

            /**
             * Encodes the specified TestMapFieldsNoBinary message. Does not implicitly {@link jspb.test.TestMapFieldsNoBinary.verify|verify} messages.
             * @param message TestMapFieldsNoBinary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.ITestMapFieldsNoBinary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestMapFieldsNoBinary message, length delimited. Does not implicitly {@link jspb.test.TestMapFieldsNoBinary.verify|verify} messages.
             * @param message TestMapFieldsNoBinary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.ITestMapFieldsNoBinary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestMapFieldsNoBinary message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestMapFieldsNoBinary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestMapFieldsNoBinary;

            /**
             * Decodes a TestMapFieldsNoBinary message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestMapFieldsNoBinary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestMapFieldsNoBinary;

            /**
             * Verifies a TestMapFieldsNoBinary message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestMapFieldsNoBinary message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestMapFieldsNoBinary
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.TestMapFieldsNoBinary;

            /**
             * Creates a plain object from a TestMapFieldsNoBinary message. Also converts values to other types if specified.
             * @param message TestMapFieldsNoBinary
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.TestMapFieldsNoBinary, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestMapFieldsNoBinary to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MapValueMessageNoBinary. */
        interface IMapValueMessageNoBinary {

            /** MapValueMessageNoBinary foo */
            foo?: (number|null);
        }

        /** Represents a MapValueMessageNoBinary. */
        class MapValueMessageNoBinary implements IMapValueMessageNoBinary {

            /**
             * Constructs a new MapValueMessageNoBinary.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.IMapValueMessageNoBinary);

            /** MapValueMessageNoBinary foo. */
            public foo: number;

            /**
             * Creates a new MapValueMessageNoBinary instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MapValueMessageNoBinary instance
             */
            public static create(properties?: jspb.test.IMapValueMessageNoBinary): jspb.test.MapValueMessageNoBinary;

            /**
             * Encodes the specified MapValueMessageNoBinary message. Does not implicitly {@link jspb.test.MapValueMessageNoBinary.verify|verify} messages.
             * @param message MapValueMessageNoBinary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.IMapValueMessageNoBinary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MapValueMessageNoBinary message, length delimited. Does not implicitly {@link jspb.test.MapValueMessageNoBinary.verify|verify} messages.
             * @param message MapValueMessageNoBinary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.IMapValueMessageNoBinary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MapValueMessageNoBinary message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MapValueMessageNoBinary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.MapValueMessageNoBinary;

            /**
             * Decodes a MapValueMessageNoBinary message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MapValueMessageNoBinary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.MapValueMessageNoBinary;

            /**
             * Verifies a MapValueMessageNoBinary message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MapValueMessageNoBinary message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MapValueMessageNoBinary
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.MapValueMessageNoBinary;

            /**
             * Creates a plain object from a MapValueMessageNoBinary message. Also converts values to other types if specified.
             * @param message MapValueMessageNoBinary
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.MapValueMessageNoBinary, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MapValueMessageNoBinary to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Deeply. */
        interface IDeeply {
        }

        /** Represents a Deeply. */
        class Deeply implements IDeeply {

            /**
             * Constructs a new Deeply.
             * @param [properties] Properties to set
             */
            constructor(properties?: jspb.test.IDeeply);

            /**
             * Creates a new Deeply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Deeply instance
             */
            public static create(properties?: jspb.test.IDeeply): jspb.test.Deeply;

            /**
             * Encodes the specified Deeply message. Does not implicitly {@link jspb.test.Deeply.verify|verify} messages.
             * @param message Deeply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: jspb.test.IDeeply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Deeply message, length delimited. Does not implicitly {@link jspb.test.Deeply.verify|verify} messages.
             * @param message Deeply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: jspb.test.IDeeply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Deeply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Deeply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Deeply;

            /**
             * Decodes a Deeply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Deeply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Deeply;

            /**
             * Verifies a Deeply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Deeply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Deeply
             */
            public static fromObject(object: { [k: string]: any }): jspb.test.Deeply;

            /**
             * Creates a plain object from a Deeply message. Also converts values to other types if specified.
             * @param message Deeply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: jspb.test.Deeply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Deeply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Deeply {

            /** Properties of a Nested. */
            interface INested {
            }

            /** Represents a Nested. */
            class Nested implements INested {

                /**
                 * Constructs a new Nested.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: jspb.test.Deeply.INested);

                /**
                 * Creates a new Nested instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Nested instance
                 */
                public static create(properties?: jspb.test.Deeply.INested): jspb.test.Deeply.Nested;

                /**
                 * Encodes the specified Nested message. Does not implicitly {@link jspb.test.Deeply.Nested.verify|verify} messages.
                 * @param message Nested message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: jspb.test.Deeply.INested, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Nested message, length delimited. Does not implicitly {@link jspb.test.Deeply.Nested.verify|verify} messages.
                 * @param message Nested message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: jspb.test.Deeply.INested, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Nested message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Nested
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Deeply.Nested;

                /**
                 * Decodes a Nested message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Nested
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Deeply.Nested;

                /**
                 * Verifies a Nested message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Nested message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Nested
                 */
                public static fromObject(object: { [k: string]: any }): jspb.test.Deeply.Nested;

                /**
                 * Creates a plain object from a Nested message. Also converts values to other types if specified.
                 * @param message Nested
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: jspb.test.Deeply.Nested, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Nested to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Nested {

                /** Properties of a Message. */
                interface IMessage {

                    /** Message count */
                    count?: (number|null);
                }

                /** Represents a Message. */
                class Message implements IMessage {

                    /**
                     * Constructs a new Message.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: jspb.test.Deeply.Nested.IMessage);

                    /** Message count. */
                    public count: number;

                    /**
                     * Creates a new Message instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Message instance
                     */
                    public static create(properties?: jspb.test.Deeply.Nested.IMessage): jspb.test.Deeply.Nested.Message;

                    /**
                     * Encodes the specified Message message. Does not implicitly {@link jspb.test.Deeply.Nested.Message.verify|verify} messages.
                     * @param message Message message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: jspb.test.Deeply.Nested.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Message message, length delimited. Does not implicitly {@link jspb.test.Deeply.Nested.Message.verify|verify} messages.
                     * @param message Message message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: jspb.test.Deeply.Nested.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Message message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Message
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Deeply.Nested.Message;

                    /**
                     * Decodes a Message message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Message
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Deeply.Nested.Message;

                    /**
                     * Verifies a Message message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Message message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Message
                     */
                    public static fromObject(object: { [k: string]: any }): jspb.test.Deeply.Nested.Message;

                    /**
                     * Creates a plain object from a Message message. Also converts values to other types if specified.
                     * @param message Message
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: jspb.test.Deeply.Nested.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Message to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumOptions .jspb.test.IsExtension.simpleOption */
            ".jspb.test.IsExtension.simpleOption"?: (string|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: Long;

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: Long;

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
