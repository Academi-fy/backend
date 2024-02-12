import { Prisma } from '@prisma/client';
export declare enum UserChatActivityScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    chatActivityId = "chatActivityId",
    userId = "userId",
    read = "read",
    starred = "starred"
}
export declare enum UserChatScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    chatId = "chatId",
    hidden = "hidden",
    pinned = "pinned",
    read = "read",
    userId = "userId"
}
export declare enum UserAccountScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    password = "password",
    userId = "userId",
    username = "username"
}
export declare enum UserScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    avatar = "avatar",
    firstName = "firstName",
    lastName = "lastName",
    type = "type",
    userAccountId = "userAccountId"
}
export declare enum SubjectScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    schoolId = "schoolId",
    shortName = "shortName",
    type = "type"
}
export declare enum SetupAccountScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    schoolId = "schoolId",
    schoolName = "schoolName"
}
export declare enum SchoolScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    setupAccountId = "setupAccountId"
}
export declare enum UserType {
    ADMIN = "ADMIN",
    TEACHER = "TEACHER",
    STUDENT = "STUDENT"
}
export declare enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}
export declare enum SubjectType {
    ART = "ART",
    BIOLOGY = "BIOLOGY",
    CHEMISTRY = "CHEMISTRY",
    COMPUTER_SCIENCE = "COMPUTER_SCIENCE",
    ECONOMICS = "ECONOMICS",
    ENGLISH = "ENGLISH",
    ETHICS = "ETHICS",
    FRENCH = "FRENCH",
    GEOGRAPHY = "GEOGRAPHY",
    GERMAN = "GERMAN",
    HISTORY = "HISTORY",
    IMP = "IMP",
    ITALIAN = "ITALIAN",
    MATHS = "MATHS",
    MUSIC = "MUSIC",
    NWT = "NWT",
    PHYSICS = "PHYSICS",
    POLITICS = "POLITICS",
    RELIGION = "RELIGION",
    SPANISH = "SPANISH",
    SPORT = "SPORT"
}
export declare enum SortOrder {
    asc = "asc",
    desc = "desc"
}
export declare enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}
export declare enum NullsOrder {
    first = "first",
    last = "last"
}
export declare enum GradeLevel {
    G5 = "G5",
    G6 = "G6",
    G7 = "G7",
    G8 = "G8",
    G9 = "G9",
    G10 = "G10"
}
export declare enum Day {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}
export declare enum ChatActivityType {
    ACTIVITY_SEND = "ACTIVITY_SEND",
    ACTIVITY_EDIT = "ACTIVITY_EDIT",
    ACTIVITY_DELETE = "ACTIVITY_DELETE",
    ACTIVITY_PIN = "ACTIVITY_PIN",
    ACTIVITY_UNPIN = "ACTIVITY_UNPIN",
    CHAT_TARGET_ADD = "CHAT_TARGET_ADD",
    CHAT_TARGET_REMOVE = "CHAT_TARGET_REMOVE",
    CHAT_COURSE_ADD = "CHAT_COURSE_ADD",
    CHAT_COURSE_REMOVE = "CHAT_COURSE_REMOVE",
    CHAT_CLUB_ADD = "CHAT_CLUB_ADD",
    CHAT_CLUB_REMOVE = "CHAT_CLUB_REMOVE",
    CHAT_NAME_CHANGE = "CHAT_NAME_CHANGE",
    CHAT_AVATAR_CHANGE = "CHAT_AVATAR_CHANGE"
}
export declare enum GradeScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    level = "level",
    schoolId = "schoolId"
}
export declare enum EventTicketScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    buyerId = "buyerId",
    eventId = "eventId",
    price = "price",
    saleDate = "saleDate"
}
export declare enum EventScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    description = "description",
    endDate = "endDate",
    host = "host",
    information = "information",
    location = "location",
    schoolId = "schoolId",
    startDate = "startDate",
    title = "title"
}
export declare enum CourseScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    chatId = "chatId",
    subjectId = "subjectId",
    teacherId = "teacherId"
}
export declare enum ClubTagScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name"
}
export declare enum ClubScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    chatId = "chatId",
    coverImage = "coverImage",
    description = "description",
    location = "location",
    meetingDay = "meetingDay",
    meetingTime = "meetingTime",
    name = "name",
    requirements = "requirements",
    schoolId = "schoolId"
}
export declare enum ClassScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    gradeId = "gradeId",
    schoolId = "schoolId",
    specifiedGrade = "specifiedGrade"
}
export declare enum ChatActivityScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    chatId = "chatId",
    targetId = "targetId",
    type = "type",
    value = "value",
    pinned = "pinned"
}
export declare enum ChatScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    avatar = "avatar",
    name = "name",
    type = "type"
}
export declare enum BlackboardTagScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name"
}
export declare enum BlackboardScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    coverImage = "coverImage",
    schoolId = "schoolId",
    text = "text",
    title = "title"
}
export declare class AggregateBlackboard {
    _count?: InstanceType<typeof BlackboardCountAggregate>;
    _min?: InstanceType<typeof BlackboardMinAggregate>;
    _max?: InstanceType<typeof BlackboardMaxAggregate>;
}
export declare class BlackboardAggregateArgs {
    where?: InstanceType<typeof BlackboardWhereInput>;
    orderBy?: Array<BlackboardOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof BlackboardCountAggregateInput>;
    _min?: InstanceType<typeof BlackboardMinAggregateInput>;
    _max?: InstanceType<typeof BlackboardMaxAggregateInput>;
}
export declare class BlackboardCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    coverImage?: true;
    schoolId?: true;
    text?: true;
    title?: true;
    _all?: true;
}
export declare class BlackboardCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    coverImage: number;
    schoolId: number;
    text: number;
    title: number;
    _all: number;
}
export declare class BlackboardCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    coverImage?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    text?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
}
export declare class BlackboardCount {
    authors?: number;
    tags?: number;
    targets?: number;
}
export declare class BlackboardCreateManySchoolInputEnvelope {
    data: Array<BlackboardCreateManySchoolInput>;
    skipDuplicates?: boolean;
}
export declare class BlackboardCreateManySchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    text?: string;
    title: string;
}
export declare class BlackboardCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    schoolId: string;
    text?: string;
    title: string;
}
export declare class BlackboardCreateNestedManyWithoutAuthorsInput {
    create?: Array<BlackboardCreateWithoutAuthorsInput>;
    connectOrCreate?: Array<BlackboardCreateOrConnectWithoutAuthorsInput>;
    connect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
}
export declare class BlackboardCreateNestedManyWithoutSchoolInput {
    create?: Array<BlackboardCreateWithoutSchoolInput>;
    connectOrCreate?: Array<BlackboardCreateOrConnectWithoutSchoolInput>;
    createMany?: InstanceType<typeof BlackboardCreateManySchoolInputEnvelope>;
    connect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
}
export declare class BlackboardCreateNestedManyWithoutTagsInput {
    create?: Array<BlackboardCreateWithoutTagsInput>;
    connectOrCreate?: Array<BlackboardCreateOrConnectWithoutTagsInput>;
    connect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
}
export declare class BlackboardCreateNestedManyWithoutTargetsInput {
    create?: Array<BlackboardCreateWithoutTargetsInput>;
    connectOrCreate?: Array<BlackboardCreateOrConnectWithoutTargetsInput>;
    connect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
}
export declare class BlackboardCreateOrConnectWithoutAuthorsInput {
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    create: InstanceType<typeof BlackboardCreateWithoutAuthorsInput>;
}
export declare class BlackboardCreateOrConnectWithoutSchoolInput {
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    create: InstanceType<typeof BlackboardCreateWithoutSchoolInput>;
}
export declare class BlackboardCreateOrConnectWithoutTagsInput {
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    create: InstanceType<typeof BlackboardCreateWithoutTagsInput>;
}
export declare class BlackboardCreateOrConnectWithoutTargetsInput {
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    create: InstanceType<typeof BlackboardCreateWithoutTargetsInput>;
}
export declare class BlackboardCreateWithoutAuthorsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    text?: string;
    title: string;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutBlackboardsInput>;
    tags?: InstanceType<typeof BlackboardTagCreateNestedManyWithoutBlackboardsInput>;
    targets?: InstanceType<typeof UserCreateNestedManyWithoutBlackboardsReceivedInput>;
}
export declare class BlackboardCreateWithoutSchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    text?: string;
    title: string;
    authors?: InstanceType<typeof UserCreateNestedManyWithoutBlackboardsInput>;
    tags?: InstanceType<typeof BlackboardTagCreateNestedManyWithoutBlackboardsInput>;
    targets?: InstanceType<typeof UserCreateNestedManyWithoutBlackboardsReceivedInput>;
}
export declare class BlackboardCreateWithoutTagsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    text?: string;
    title: string;
    authors?: InstanceType<typeof UserCreateNestedManyWithoutBlackboardsInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutBlackboardsInput>;
    targets?: InstanceType<typeof UserCreateNestedManyWithoutBlackboardsReceivedInput>;
}
export declare class BlackboardCreateWithoutTargetsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    text?: string;
    title: string;
    authors?: InstanceType<typeof UserCreateNestedManyWithoutBlackboardsInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutBlackboardsInput>;
    tags?: InstanceType<typeof BlackboardTagCreateNestedManyWithoutBlackboardsInput>;
}
export declare class BlackboardCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    text?: string;
    title: string;
    authors?: InstanceType<typeof UserCreateNestedManyWithoutBlackboardsInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutBlackboardsInput>;
    tags?: InstanceType<typeof BlackboardTagCreateNestedManyWithoutBlackboardsInput>;
    targets?: InstanceType<typeof UserCreateNestedManyWithoutBlackboardsReceivedInput>;
}
export declare class BlackboardGroupByArgs {
    where?: InstanceType<typeof BlackboardWhereInput>;
    orderBy?: Array<BlackboardOrderByWithAggregationInput>;
    by: Array<keyof typeof BlackboardScalarFieldEnum>;
    having?: InstanceType<typeof BlackboardScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof BlackboardCountAggregateInput>;
    _min?: InstanceType<typeof BlackboardMinAggregateInput>;
    _max?: InstanceType<typeof BlackboardMaxAggregateInput>;
}
export declare class BlackboardGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    coverImage?: string;
    schoolId: string;
    text?: string;
    title: string;
    _count?: InstanceType<typeof BlackboardCountAggregate>;
    _min?: InstanceType<typeof BlackboardMinAggregate>;
    _max?: InstanceType<typeof BlackboardMaxAggregate>;
}
export declare class BlackboardListRelationFilter {
    every?: InstanceType<typeof BlackboardWhereInput>;
    some?: InstanceType<typeof BlackboardWhereInput>;
    none?: InstanceType<typeof BlackboardWhereInput>;
}
export declare class BlackboardMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    coverImage?: true;
    schoolId?: true;
    text?: true;
    title?: true;
}
export declare class BlackboardMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    schoolId?: string;
    text?: string;
    title?: string;
}
export declare class BlackboardMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    coverImage?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    text?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
}
export declare class BlackboardMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    coverImage?: true;
    schoolId?: true;
    text?: true;
    title?: true;
}
export declare class BlackboardMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    schoolId?: string;
    text?: string;
    title?: string;
}
export declare class BlackboardMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    coverImage?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    text?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
}
export declare class BlackboardOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class BlackboardOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    coverImage?: InstanceType<typeof SortOrderInput>;
    schoolId?: keyof typeof SortOrder;
    text?: InstanceType<typeof SortOrderInput>;
    title?: keyof typeof SortOrder;
    _count?: InstanceType<typeof BlackboardCountOrderByAggregateInput>;
    _max?: InstanceType<typeof BlackboardMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof BlackboardMinOrderByAggregateInput>;
}
export declare class BlackboardOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    coverImage?: InstanceType<typeof SortOrderInput>;
    schoolId?: keyof typeof SortOrder;
    text?: InstanceType<typeof SortOrderInput>;
    title?: keyof typeof SortOrder;
    authors?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    school?: InstanceType<typeof SchoolOrderByWithRelationInput>;
    tags?: InstanceType<typeof BlackboardTagOrderByRelationAggregateInput>;
    targets?: InstanceType<typeof UserOrderByRelationAggregateInput>;
}
export declare class BlackboardScalarWhereWithAggregatesInput {
    AND?: Array<BlackboardScalarWhereWithAggregatesInput>;
    OR?: Array<BlackboardScalarWhereWithAggregatesInput>;
    NOT?: Array<BlackboardScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    coverImage?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    schoolId?: InstanceType<typeof UuidWithAggregatesFilter>;
    text?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    title?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class BlackboardScalarWhereInput {
    AND?: Array<BlackboardScalarWhereInput>;
    OR?: Array<BlackboardScalarWhereInput>;
    NOT?: Array<BlackboardScalarWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    coverImage?: InstanceType<typeof StringNullableFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
    text?: InstanceType<typeof StringNullableFilter>;
    title?: InstanceType<typeof StringFilter>;
}
export declare class BlackboardUncheckedCreateNestedManyWithoutAuthorsInput {
    create?: Array<BlackboardCreateWithoutAuthorsInput>;
    connectOrCreate?: Array<BlackboardCreateOrConnectWithoutAuthorsInput>;
    connect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
}
export declare class BlackboardUncheckedCreateNestedManyWithoutSchoolInput {
    create?: Array<BlackboardCreateWithoutSchoolInput>;
    connectOrCreate?: Array<BlackboardCreateOrConnectWithoutSchoolInput>;
    createMany?: InstanceType<typeof BlackboardCreateManySchoolInputEnvelope>;
    connect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
}
export declare class BlackboardUncheckedCreateNestedManyWithoutTagsInput {
    create?: Array<BlackboardCreateWithoutTagsInput>;
    connectOrCreate?: Array<BlackboardCreateOrConnectWithoutTagsInput>;
    connect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
}
export declare class BlackboardUncheckedCreateNestedManyWithoutTargetsInput {
    create?: Array<BlackboardCreateWithoutTargetsInput>;
    connectOrCreate?: Array<BlackboardCreateOrConnectWithoutTargetsInput>;
    connect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
}
export declare class BlackboardUncheckedCreateWithoutAuthorsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    schoolId: string;
    text?: string;
    title: string;
    tags?: InstanceType<typeof BlackboardTagUncheckedCreateNestedManyWithoutBlackboardsInput>;
    targets?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutBlackboardsReceivedInput>;
}
export declare class BlackboardUncheckedCreateWithoutSchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    text?: string;
    title: string;
    authors?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutBlackboardsInput>;
    tags?: InstanceType<typeof BlackboardTagUncheckedCreateNestedManyWithoutBlackboardsInput>;
    targets?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutBlackboardsReceivedInput>;
}
export declare class BlackboardUncheckedCreateWithoutTagsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    schoolId: string;
    text?: string;
    title: string;
    authors?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutBlackboardsInput>;
    targets?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutBlackboardsReceivedInput>;
}
export declare class BlackboardUncheckedCreateWithoutTargetsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    schoolId: string;
    text?: string;
    title: string;
    authors?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutBlackboardsInput>;
    tags?: InstanceType<typeof BlackboardTagUncheckedCreateNestedManyWithoutBlackboardsInput>;
}
export declare class BlackboardUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    schoolId: string;
    text?: string;
    title: string;
    authors?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutBlackboardsInput>;
    tags?: InstanceType<typeof BlackboardTagUncheckedCreateNestedManyWithoutBlackboardsInput>;
    targets?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutBlackboardsReceivedInput>;
}
export declare class BlackboardUncheckedUpdateManyWithoutAuthorsNestedInput {
    create?: Array<BlackboardCreateWithoutAuthorsInput>;
    connectOrCreate?: Array<BlackboardCreateOrConnectWithoutAuthorsInput>;
    upsert?: Array<BlackboardUpsertWithWhereUniqueWithoutAuthorsInput>;
    set?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    update?: Array<BlackboardUpdateWithWhereUniqueWithoutAuthorsInput>;
    updateMany?: Array<BlackboardUpdateManyWithWhereWithoutAuthorsInput>;
    deleteMany?: Array<BlackboardScalarWhereInput>;
}
export declare class BlackboardUncheckedUpdateManyWithoutAuthorsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    text?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BlackboardUncheckedUpdateManyWithoutSchoolNestedInput {
    create?: Array<BlackboardCreateWithoutSchoolInput>;
    connectOrCreate?: Array<BlackboardCreateOrConnectWithoutSchoolInput>;
    upsert?: Array<BlackboardUpsertWithWhereUniqueWithoutSchoolInput>;
    createMany?: InstanceType<typeof BlackboardCreateManySchoolInputEnvelope>;
    set?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    update?: Array<BlackboardUpdateWithWhereUniqueWithoutSchoolInput>;
    updateMany?: Array<BlackboardUpdateManyWithWhereWithoutSchoolInput>;
    deleteMany?: Array<BlackboardScalarWhereInput>;
}
export declare class BlackboardUncheckedUpdateManyWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    text?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BlackboardUncheckedUpdateManyWithoutTagsNestedInput {
    create?: Array<BlackboardCreateWithoutTagsInput>;
    connectOrCreate?: Array<BlackboardCreateOrConnectWithoutTagsInput>;
    upsert?: Array<BlackboardUpsertWithWhereUniqueWithoutTagsInput>;
    set?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    update?: Array<BlackboardUpdateWithWhereUniqueWithoutTagsInput>;
    updateMany?: Array<BlackboardUpdateManyWithWhereWithoutTagsInput>;
    deleteMany?: Array<BlackboardScalarWhereInput>;
}
export declare class BlackboardUncheckedUpdateManyWithoutTagsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    text?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BlackboardUncheckedUpdateManyWithoutTargetsNestedInput {
    create?: Array<BlackboardCreateWithoutTargetsInput>;
    connectOrCreate?: Array<BlackboardCreateOrConnectWithoutTargetsInput>;
    upsert?: Array<BlackboardUpsertWithWhereUniqueWithoutTargetsInput>;
    set?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    update?: Array<BlackboardUpdateWithWhereUniqueWithoutTargetsInput>;
    updateMany?: Array<BlackboardUpdateManyWithWhereWithoutTargetsInput>;
    deleteMany?: Array<BlackboardScalarWhereInput>;
}
export declare class BlackboardUncheckedUpdateManyWithoutTargetsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    text?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BlackboardUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    text?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BlackboardUncheckedUpdateWithoutAuthorsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    text?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    tags?: InstanceType<typeof BlackboardTagUncheckedUpdateManyWithoutBlackboardsNestedInput>;
    targets?: InstanceType<typeof UserUncheckedUpdateManyWithoutBlackboardsReceivedNestedInput>;
}
export declare class BlackboardUncheckedUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    text?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    authors?: InstanceType<typeof UserUncheckedUpdateManyWithoutBlackboardsNestedInput>;
    tags?: InstanceType<typeof BlackboardTagUncheckedUpdateManyWithoutBlackboardsNestedInput>;
    targets?: InstanceType<typeof UserUncheckedUpdateManyWithoutBlackboardsReceivedNestedInput>;
}
export declare class BlackboardUncheckedUpdateWithoutTagsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    text?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    authors?: InstanceType<typeof UserUncheckedUpdateManyWithoutBlackboardsNestedInput>;
    targets?: InstanceType<typeof UserUncheckedUpdateManyWithoutBlackboardsReceivedNestedInput>;
}
export declare class BlackboardUncheckedUpdateWithoutTargetsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    text?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    authors?: InstanceType<typeof UserUncheckedUpdateManyWithoutBlackboardsNestedInput>;
    tags?: InstanceType<typeof BlackboardTagUncheckedUpdateManyWithoutBlackboardsNestedInput>;
}
export declare class BlackboardUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    text?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    authors?: InstanceType<typeof UserUncheckedUpdateManyWithoutBlackboardsNestedInput>;
    tags?: InstanceType<typeof BlackboardTagUncheckedUpdateManyWithoutBlackboardsNestedInput>;
    targets?: InstanceType<typeof UserUncheckedUpdateManyWithoutBlackboardsReceivedNestedInput>;
}
export declare class BlackboardUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    text?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BlackboardUpdateManyWithWhereWithoutAuthorsInput {
    where: InstanceType<typeof BlackboardScalarWhereInput>;
    data: InstanceType<typeof BlackboardUpdateManyMutationInput>;
}
export declare class BlackboardUpdateManyWithWhereWithoutSchoolInput {
    where: InstanceType<typeof BlackboardScalarWhereInput>;
    data: InstanceType<typeof BlackboardUpdateManyMutationInput>;
}
export declare class BlackboardUpdateManyWithWhereWithoutTagsInput {
    where: InstanceType<typeof BlackboardScalarWhereInput>;
    data: InstanceType<typeof BlackboardUpdateManyMutationInput>;
}
export declare class BlackboardUpdateManyWithWhereWithoutTargetsInput {
    where: InstanceType<typeof BlackboardScalarWhereInput>;
    data: InstanceType<typeof BlackboardUpdateManyMutationInput>;
}
export declare class BlackboardUpdateManyWithoutAuthorsNestedInput {
    create?: Array<BlackboardCreateWithoutAuthorsInput>;
    connectOrCreate?: Array<BlackboardCreateOrConnectWithoutAuthorsInput>;
    upsert?: Array<BlackboardUpsertWithWhereUniqueWithoutAuthorsInput>;
    set?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    update?: Array<BlackboardUpdateWithWhereUniqueWithoutAuthorsInput>;
    updateMany?: Array<BlackboardUpdateManyWithWhereWithoutAuthorsInput>;
    deleteMany?: Array<BlackboardScalarWhereInput>;
}
export declare class BlackboardUpdateManyWithoutSchoolNestedInput {
    create?: Array<BlackboardCreateWithoutSchoolInput>;
    connectOrCreate?: Array<BlackboardCreateOrConnectWithoutSchoolInput>;
    upsert?: Array<BlackboardUpsertWithWhereUniqueWithoutSchoolInput>;
    createMany?: InstanceType<typeof BlackboardCreateManySchoolInputEnvelope>;
    set?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    update?: Array<BlackboardUpdateWithWhereUniqueWithoutSchoolInput>;
    updateMany?: Array<BlackboardUpdateManyWithWhereWithoutSchoolInput>;
    deleteMany?: Array<BlackboardScalarWhereInput>;
}
export declare class BlackboardUpdateManyWithoutTagsNestedInput {
    create?: Array<BlackboardCreateWithoutTagsInput>;
    connectOrCreate?: Array<BlackboardCreateOrConnectWithoutTagsInput>;
    upsert?: Array<BlackboardUpsertWithWhereUniqueWithoutTagsInput>;
    set?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    update?: Array<BlackboardUpdateWithWhereUniqueWithoutTagsInput>;
    updateMany?: Array<BlackboardUpdateManyWithWhereWithoutTagsInput>;
    deleteMany?: Array<BlackboardScalarWhereInput>;
}
export declare class BlackboardUpdateManyWithoutTargetsNestedInput {
    create?: Array<BlackboardCreateWithoutTargetsInput>;
    connectOrCreate?: Array<BlackboardCreateOrConnectWithoutTargetsInput>;
    upsert?: Array<BlackboardUpsertWithWhereUniqueWithoutTargetsInput>;
    set?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>>;
    update?: Array<BlackboardUpdateWithWhereUniqueWithoutTargetsInput>;
    updateMany?: Array<BlackboardUpdateManyWithWhereWithoutTargetsInput>;
    deleteMany?: Array<BlackboardScalarWhereInput>;
}
export declare class BlackboardUpdateWithWhereUniqueWithoutAuthorsInput {
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    data: InstanceType<typeof BlackboardUpdateWithoutAuthorsInput>;
}
export declare class BlackboardUpdateWithWhereUniqueWithoutSchoolInput {
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    data: InstanceType<typeof BlackboardUpdateWithoutSchoolInput>;
}
export declare class BlackboardUpdateWithWhereUniqueWithoutTagsInput {
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    data: InstanceType<typeof BlackboardUpdateWithoutTagsInput>;
}
export declare class BlackboardUpdateWithWhereUniqueWithoutTargetsInput {
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    data: InstanceType<typeof BlackboardUpdateWithoutTargetsInput>;
}
export declare class BlackboardUpdateWithoutAuthorsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    text?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutBlackboardsNestedInput>;
    tags?: InstanceType<typeof BlackboardTagUpdateManyWithoutBlackboardsNestedInput>;
    targets?: InstanceType<typeof UserUpdateManyWithoutBlackboardsReceivedNestedInput>;
}
export declare class BlackboardUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    text?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    authors?: InstanceType<typeof UserUpdateManyWithoutBlackboardsNestedInput>;
    tags?: InstanceType<typeof BlackboardTagUpdateManyWithoutBlackboardsNestedInput>;
    targets?: InstanceType<typeof UserUpdateManyWithoutBlackboardsReceivedNestedInput>;
}
export declare class BlackboardUpdateWithoutTagsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    text?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    authors?: InstanceType<typeof UserUpdateManyWithoutBlackboardsNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutBlackboardsNestedInput>;
    targets?: InstanceType<typeof UserUpdateManyWithoutBlackboardsReceivedNestedInput>;
}
export declare class BlackboardUpdateWithoutTargetsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    text?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    authors?: InstanceType<typeof UserUpdateManyWithoutBlackboardsNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutBlackboardsNestedInput>;
    tags?: InstanceType<typeof BlackboardTagUpdateManyWithoutBlackboardsNestedInput>;
}
export declare class BlackboardUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    text?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    authors?: InstanceType<typeof UserUpdateManyWithoutBlackboardsNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutBlackboardsNestedInput>;
    tags?: InstanceType<typeof BlackboardTagUpdateManyWithoutBlackboardsNestedInput>;
    targets?: InstanceType<typeof UserUpdateManyWithoutBlackboardsReceivedNestedInput>;
}
export declare class BlackboardUpsertWithWhereUniqueWithoutAuthorsInput {
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    update: InstanceType<typeof BlackboardUpdateWithoutAuthorsInput>;
    create: InstanceType<typeof BlackboardCreateWithoutAuthorsInput>;
}
export declare class BlackboardUpsertWithWhereUniqueWithoutSchoolInput {
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    update: InstanceType<typeof BlackboardUpdateWithoutSchoolInput>;
    create: InstanceType<typeof BlackboardCreateWithoutSchoolInput>;
}
export declare class BlackboardUpsertWithWhereUniqueWithoutTagsInput {
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    update: InstanceType<typeof BlackboardUpdateWithoutTagsInput>;
    create: InstanceType<typeof BlackboardCreateWithoutTagsInput>;
}
export declare class BlackboardUpsertWithWhereUniqueWithoutTargetsInput {
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    update: InstanceType<typeof BlackboardUpdateWithoutTargetsInput>;
    create: InstanceType<typeof BlackboardCreateWithoutTargetsInput>;
}
export declare class BlackboardWhereUniqueInput {
    id?: string;
    AND?: Array<BlackboardWhereInput>;
    OR?: Array<BlackboardWhereInput>;
    NOT?: Array<BlackboardWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    coverImage?: InstanceType<typeof StringNullableFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
    text?: InstanceType<typeof StringNullableFilter>;
    title?: InstanceType<typeof StringFilter>;
    authors?: InstanceType<typeof UserListRelationFilter>;
    school?: InstanceType<typeof SchoolRelationFilter>;
    tags?: InstanceType<typeof BlackboardTagListRelationFilter>;
    targets?: InstanceType<typeof UserListRelationFilter>;
}
export declare class BlackboardWhereInput {
    AND?: Array<BlackboardWhereInput>;
    OR?: Array<BlackboardWhereInput>;
    NOT?: Array<BlackboardWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    coverImage?: InstanceType<typeof StringNullableFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
    text?: InstanceType<typeof StringNullableFilter>;
    title?: InstanceType<typeof StringFilter>;
    authors?: InstanceType<typeof UserListRelationFilter>;
    school?: InstanceType<typeof SchoolRelationFilter>;
    tags?: InstanceType<typeof BlackboardTagListRelationFilter>;
    targets?: InstanceType<typeof UserListRelationFilter>;
}
export declare class Blackboard {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    coverImage: string | null;
    schoolId: string;
    text: string | null;
    title: string;
    authors?: Array<User>;
    school?: InstanceType<typeof School>;
    tags?: Array<BlackboardTag>;
    targets?: Array<User>;
    _count?: InstanceType<typeof BlackboardCount>;
}
export declare class CreateManyBlackboardArgs {
    data: Array<BlackboardCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneBlackboardArgs {
    data: InstanceType<typeof BlackboardCreateInput>;
}
export declare class DeleteManyBlackboardArgs {
    where?: InstanceType<typeof BlackboardWhereInput>;
}
export declare class DeleteOneBlackboardArgs {
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
}
export declare class FindFirstBlackboardOrThrowArgs {
    where?: InstanceType<typeof BlackboardWhereInput>;
    orderBy?: Array<BlackboardOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BlackboardScalarFieldEnum>;
}
export declare class FindFirstBlackboardArgs {
    where?: InstanceType<typeof BlackboardWhereInput>;
    orderBy?: Array<BlackboardOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BlackboardScalarFieldEnum>;
}
export declare class FindManyBlackboardArgs {
    where?: InstanceType<typeof BlackboardWhereInput>;
    orderBy?: Array<BlackboardOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BlackboardScalarFieldEnum>;
}
export declare class FindUniqueBlackboardOrThrowArgs {
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
}
export declare class FindUniqueBlackboardArgs {
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
}
export declare class UpdateManyBlackboardArgs {
    data: InstanceType<typeof BlackboardUpdateManyMutationInput>;
    where?: InstanceType<typeof BlackboardWhereInput>;
}
export declare class UpdateOneBlackboardArgs {
    data: InstanceType<typeof BlackboardUpdateInput>;
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
}
export declare class UpsertOneBlackboardArgs {
    where: Prisma.AtLeast<BlackboardWhereUniqueInput, 'id'>;
    create: InstanceType<typeof BlackboardCreateInput>;
    update: InstanceType<typeof BlackboardUpdateInput>;
}
export declare class AggregateBlackboardTag {
    _count?: InstanceType<typeof BlackboardTagCountAggregate>;
    _min?: InstanceType<typeof BlackboardTagMinAggregate>;
    _max?: InstanceType<typeof BlackboardTagMaxAggregate>;
}
export declare class BlackboardTagAggregateArgs {
    where?: InstanceType<typeof BlackboardTagWhereInput>;
    orderBy?: Array<BlackboardTagOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof BlackboardTagCountAggregateInput>;
    _min?: InstanceType<typeof BlackboardTagMinAggregateInput>;
    _max?: InstanceType<typeof BlackboardTagMaxAggregateInput>;
}
export declare class BlackboardTagCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    name?: true;
    _all?: true;
}
export declare class BlackboardTagCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    name: number;
    _all: number;
}
export declare class BlackboardTagCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class BlackboardTagCount {
    blackboards?: number;
}
export declare class BlackboardTagCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
}
export declare class BlackboardTagCreateNestedManyWithoutBlackboardsInput {
    create?: Array<BlackboardTagCreateWithoutBlackboardsInput>;
    connectOrCreate?: Array<BlackboardTagCreateOrConnectWithoutBlackboardsInput>;
    connect?: Array<Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>>;
}
export declare class BlackboardTagCreateOrConnectWithoutBlackboardsInput {
    where: Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>;
    create: InstanceType<typeof BlackboardTagCreateWithoutBlackboardsInput>;
}
export declare class BlackboardTagCreateWithoutBlackboardsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
}
export declare class BlackboardTagCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutTagsInput>;
}
export declare class BlackboardTagGroupByArgs {
    where?: InstanceType<typeof BlackboardTagWhereInput>;
    orderBy?: Array<BlackboardTagOrderByWithAggregationInput>;
    by: Array<keyof typeof BlackboardTagScalarFieldEnum>;
    having?: InstanceType<typeof BlackboardTagScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof BlackboardTagCountAggregateInput>;
    _min?: InstanceType<typeof BlackboardTagMinAggregateInput>;
    _max?: InstanceType<typeof BlackboardTagMaxAggregateInput>;
}
export declare class BlackboardTagGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    name: string;
    _count?: InstanceType<typeof BlackboardTagCountAggregate>;
    _min?: InstanceType<typeof BlackboardTagMinAggregate>;
    _max?: InstanceType<typeof BlackboardTagMaxAggregate>;
}
export declare class BlackboardTagListRelationFilter {
    every?: InstanceType<typeof BlackboardTagWhereInput>;
    some?: InstanceType<typeof BlackboardTagWhereInput>;
    none?: InstanceType<typeof BlackboardTagWhereInput>;
}
export declare class BlackboardTagMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    name?: true;
}
export declare class BlackboardTagMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name?: string;
}
export declare class BlackboardTagMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class BlackboardTagMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    name?: true;
}
export declare class BlackboardTagMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name?: string;
}
export declare class BlackboardTagMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class BlackboardTagOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class BlackboardTagOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    _count?: InstanceType<typeof BlackboardTagCountOrderByAggregateInput>;
    _max?: InstanceType<typeof BlackboardTagMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof BlackboardTagMinOrderByAggregateInput>;
}
export declare class BlackboardTagOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    blackboards?: InstanceType<typeof BlackboardOrderByRelationAggregateInput>;
}
export declare class BlackboardTagScalarWhereWithAggregatesInput {
    AND?: Array<BlackboardTagScalarWhereWithAggregatesInput>;
    OR?: Array<BlackboardTagScalarWhereWithAggregatesInput>;
    NOT?: Array<BlackboardTagScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class BlackboardTagScalarWhereInput {
    AND?: Array<BlackboardTagScalarWhereInput>;
    OR?: Array<BlackboardTagScalarWhereInput>;
    NOT?: Array<BlackboardTagScalarWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    name?: InstanceType<typeof StringFilter>;
}
export declare class BlackboardTagUncheckedCreateNestedManyWithoutBlackboardsInput {
    create?: Array<BlackboardTagCreateWithoutBlackboardsInput>;
    connectOrCreate?: Array<BlackboardTagCreateOrConnectWithoutBlackboardsInput>;
    connect?: Array<Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>>;
}
export declare class BlackboardTagUncheckedCreateWithoutBlackboardsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
}
export declare class BlackboardTagUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutTagsInput>;
}
export declare class BlackboardTagUncheckedUpdateManyWithoutBlackboardsNestedInput {
    create?: Array<BlackboardTagCreateWithoutBlackboardsInput>;
    connectOrCreate?: Array<BlackboardTagCreateOrConnectWithoutBlackboardsInput>;
    upsert?: Array<BlackboardTagUpsertWithWhereUniqueWithoutBlackboardsInput>;
    set?: Array<Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>>;
    disconnect?: Array<Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>>;
    delete?: Array<Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>>;
    connect?: Array<Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>>;
    update?: Array<BlackboardTagUpdateWithWhereUniqueWithoutBlackboardsInput>;
    updateMany?: Array<BlackboardTagUpdateManyWithWhereWithoutBlackboardsInput>;
    deleteMany?: Array<BlackboardTagScalarWhereInput>;
}
export declare class BlackboardTagUncheckedUpdateManyWithoutBlackboardsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BlackboardTagUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BlackboardTagUncheckedUpdateWithoutBlackboardsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BlackboardTagUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutTagsNestedInput>;
}
export declare class BlackboardTagUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BlackboardTagUpdateManyWithWhereWithoutBlackboardsInput {
    where: InstanceType<typeof BlackboardTagScalarWhereInput>;
    data: InstanceType<typeof BlackboardTagUpdateManyMutationInput>;
}
export declare class BlackboardTagUpdateManyWithoutBlackboardsNestedInput {
    create?: Array<BlackboardTagCreateWithoutBlackboardsInput>;
    connectOrCreate?: Array<BlackboardTagCreateOrConnectWithoutBlackboardsInput>;
    upsert?: Array<BlackboardTagUpsertWithWhereUniqueWithoutBlackboardsInput>;
    set?: Array<Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>>;
    disconnect?: Array<Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>>;
    delete?: Array<Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>>;
    connect?: Array<Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>>;
    update?: Array<BlackboardTagUpdateWithWhereUniqueWithoutBlackboardsInput>;
    updateMany?: Array<BlackboardTagUpdateManyWithWhereWithoutBlackboardsInput>;
    deleteMany?: Array<BlackboardTagScalarWhereInput>;
}
export declare class BlackboardTagUpdateWithWhereUniqueWithoutBlackboardsInput {
    where: Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>;
    data: InstanceType<typeof BlackboardTagUpdateWithoutBlackboardsInput>;
}
export declare class BlackboardTagUpdateWithoutBlackboardsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class BlackboardTagUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutTagsNestedInput>;
}
export declare class BlackboardTagUpsertWithWhereUniqueWithoutBlackboardsInput {
    where: Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>;
    update: InstanceType<typeof BlackboardTagUpdateWithoutBlackboardsInput>;
    create: InstanceType<typeof BlackboardTagCreateWithoutBlackboardsInput>;
}
export declare class BlackboardTagWhereUniqueInput {
    id?: string;
    name?: string;
    AND?: Array<BlackboardTagWhereInput>;
    OR?: Array<BlackboardTagWhereInput>;
    NOT?: Array<BlackboardTagWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    blackboards?: InstanceType<typeof BlackboardListRelationFilter>;
}
export declare class BlackboardTagWhereInput {
    AND?: Array<BlackboardTagWhereInput>;
    OR?: Array<BlackboardTagWhereInput>;
    NOT?: Array<BlackboardTagWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    name?: InstanceType<typeof StringFilter>;
    blackboards?: InstanceType<typeof BlackboardListRelationFilter>;
}
export declare class BlackboardTag {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    blackboards?: Array<Blackboard>;
    _count?: InstanceType<typeof BlackboardTagCount>;
}
export declare class CreateManyBlackboardTagArgs {
    data: Array<BlackboardTagCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneBlackboardTagArgs {
    data: InstanceType<typeof BlackboardTagCreateInput>;
}
export declare class DeleteManyBlackboardTagArgs {
    where?: InstanceType<typeof BlackboardTagWhereInput>;
}
export declare class DeleteOneBlackboardTagArgs {
    where: Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>;
}
export declare class FindFirstBlackboardTagOrThrowArgs {
    where?: InstanceType<typeof BlackboardTagWhereInput>;
    orderBy?: Array<BlackboardTagOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BlackboardTagScalarFieldEnum>;
}
export declare class FindFirstBlackboardTagArgs {
    where?: InstanceType<typeof BlackboardTagWhereInput>;
    orderBy?: Array<BlackboardTagOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BlackboardTagScalarFieldEnum>;
}
export declare class FindManyBlackboardTagArgs {
    where?: InstanceType<typeof BlackboardTagWhereInput>;
    orderBy?: Array<BlackboardTagOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof BlackboardTagScalarFieldEnum>;
}
export declare class FindUniqueBlackboardTagOrThrowArgs {
    where: Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>;
}
export declare class FindUniqueBlackboardTagArgs {
    where: Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>;
}
export declare class UpdateManyBlackboardTagArgs {
    data: InstanceType<typeof BlackboardTagUpdateManyMutationInput>;
    where?: InstanceType<typeof BlackboardTagWhereInput>;
}
export declare class UpdateOneBlackboardTagArgs {
    data: InstanceType<typeof BlackboardTagUpdateInput>;
    where: Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>;
}
export declare class UpsertOneBlackboardTagArgs {
    where: Prisma.AtLeast<BlackboardTagWhereUniqueInput, 'id' | 'name'>;
    create: InstanceType<typeof BlackboardTagCreateInput>;
    update: InstanceType<typeof BlackboardTagUpdateInput>;
}
export declare class AggregateChat {
    _count?: InstanceType<typeof ChatCountAggregate>;
    _min?: InstanceType<typeof ChatMinAggregate>;
    _max?: InstanceType<typeof ChatMaxAggregate>;
}
export declare class ChatAggregateArgs {
    where?: InstanceType<typeof ChatWhereInput>;
    orderBy?: Array<ChatOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ChatCountAggregateInput>;
    _min?: InstanceType<typeof ChatMinAggregateInput>;
    _max?: InstanceType<typeof ChatMaxAggregateInput>;
}
export declare class ChatCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    avatar?: true;
    name?: true;
    type?: true;
    _all?: true;
}
export declare class ChatCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    avatar: number;
    name: number;
    type: number;
    _all: number;
}
export declare class ChatCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    avatar?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
}
export declare class ChatCount {
    activities?: number;
    clubs?: number;
    courses?: number;
    targets?: number;
}
export declare class ChatCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    name: string;
    type: string;
}
export declare class ChatCreateNestedOneWithoutActivitiesInput {
    create?: InstanceType<typeof ChatCreateWithoutActivitiesInput>;
    connectOrCreate?: InstanceType<typeof ChatCreateOrConnectWithoutActivitiesInput>;
    connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
}
export declare class ChatCreateNestedOneWithoutClubsInput {
    create?: InstanceType<typeof ChatCreateWithoutClubsInput>;
    connectOrCreate?: InstanceType<typeof ChatCreateOrConnectWithoutClubsInput>;
    connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
}
export declare class ChatCreateNestedOneWithoutCoursesInput {
    create?: InstanceType<typeof ChatCreateWithoutCoursesInput>;
    connectOrCreate?: InstanceType<typeof ChatCreateOrConnectWithoutCoursesInput>;
    connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
}
export declare class ChatCreateNestedOneWithoutTargetsInput {
    create?: InstanceType<typeof ChatCreateWithoutTargetsInput>;
    connectOrCreate?: InstanceType<typeof ChatCreateOrConnectWithoutTargetsInput>;
    connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
}
export declare class ChatCreateOrConnectWithoutActivitiesInput {
    where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ChatCreateWithoutActivitiesInput>;
}
export declare class ChatCreateOrConnectWithoutClubsInput {
    where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ChatCreateWithoutClubsInput>;
}
export declare class ChatCreateOrConnectWithoutCoursesInput {
    where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ChatCreateWithoutCoursesInput>;
}
export declare class ChatCreateOrConnectWithoutTargetsInput {
    where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ChatCreateWithoutTargetsInput>;
}
export declare class ChatCreateWithoutActivitiesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    name: string;
    type: string;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutChatInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutChatInput>;
    targets?: InstanceType<typeof UserChatCreateNestedManyWithoutChatInput>;
}
export declare class ChatCreateWithoutClubsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    name: string;
    type: string;
    activities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutChatInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutChatInput>;
    targets?: InstanceType<typeof UserChatCreateNestedManyWithoutChatInput>;
}
export declare class ChatCreateWithoutCoursesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    name: string;
    type: string;
    activities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutChatInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutChatInput>;
    targets?: InstanceType<typeof UserChatCreateNestedManyWithoutChatInput>;
}
export declare class ChatCreateWithoutTargetsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    name: string;
    type: string;
    activities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutChatInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutChatInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutChatInput>;
}
export declare class ChatCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    name: string;
    type: string;
    activities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutChatInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutChatInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutChatInput>;
    targets?: InstanceType<typeof UserChatCreateNestedManyWithoutChatInput>;
}
export declare class ChatGroupByArgs {
    where?: InstanceType<typeof ChatWhereInput>;
    orderBy?: Array<ChatOrderByWithAggregationInput>;
    by: Array<keyof typeof ChatScalarFieldEnum>;
    having?: InstanceType<typeof ChatScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ChatCountAggregateInput>;
    _min?: InstanceType<typeof ChatMinAggregateInput>;
    _max?: InstanceType<typeof ChatMaxAggregateInput>;
}
export declare class ChatGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    avatar?: string;
    name: string;
    type: string;
    _count?: InstanceType<typeof ChatCountAggregate>;
    _min?: InstanceType<typeof ChatMinAggregate>;
    _max?: InstanceType<typeof ChatMaxAggregate>;
}
export declare class ChatMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    avatar?: true;
    name?: true;
    type?: true;
}
export declare class ChatMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    name?: string;
    type?: string;
}
export declare class ChatMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    avatar?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
}
export declare class ChatMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    avatar?: true;
    name?: true;
    type?: true;
}
export declare class ChatMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    name?: string;
    type?: string;
}
export declare class ChatMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    avatar?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
}
export declare class ChatNullableRelationFilter {
    is?: InstanceType<typeof ChatWhereInput>;
    isNot?: InstanceType<typeof ChatWhereInput>;
}
export declare class ChatOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    avatar?: InstanceType<typeof SortOrderInput>;
    name?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ChatCountOrderByAggregateInput>;
    _max?: InstanceType<typeof ChatMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ChatMinOrderByAggregateInput>;
}
export declare class ChatOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    avatar?: InstanceType<typeof SortOrderInput>;
    name?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    activities?: InstanceType<typeof ChatActivityOrderByRelationAggregateInput>;
    clubs?: InstanceType<typeof ClubOrderByRelationAggregateInput>;
    courses?: InstanceType<typeof CourseOrderByRelationAggregateInput>;
    targets?: InstanceType<typeof UserChatOrderByRelationAggregateInput>;
}
export declare class ChatRelationFilter {
    is?: InstanceType<typeof ChatWhereInput>;
    isNot?: InstanceType<typeof ChatWhereInput>;
}
export declare class ChatScalarWhereWithAggregatesInput {
    AND?: Array<ChatScalarWhereWithAggregatesInput>;
    OR?: Array<ChatScalarWhereWithAggregatesInput>;
    NOT?: Array<ChatScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    avatar?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    type?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class ChatUncheckedCreateWithoutActivitiesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    name: string;
    type: string;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutChatInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutChatInput>;
    targets?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutChatInput>;
}
export declare class ChatUncheckedCreateWithoutClubsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    name: string;
    type: string;
    activities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutChatInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutChatInput>;
    targets?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutChatInput>;
}
export declare class ChatUncheckedCreateWithoutCoursesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    name: string;
    type: string;
    activities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutChatInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutChatInput>;
    targets?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutChatInput>;
}
export declare class ChatUncheckedCreateWithoutTargetsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    name: string;
    type: string;
    activities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutChatInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutChatInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutChatInput>;
}
export declare class ChatUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    name: string;
    type: string;
    activities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutChatInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutChatInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutChatInput>;
    targets?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutChatInput>;
}
export declare class ChatUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ChatUncheckedUpdateWithoutActivitiesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutChatNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutChatNestedInput>;
    targets?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutChatNestedInput>;
}
export declare class ChatUncheckedUpdateWithoutClubsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutChatNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutChatNestedInput>;
    targets?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutChatNestedInput>;
}
export declare class ChatUncheckedUpdateWithoutCoursesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutChatNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutChatNestedInput>;
    targets?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutChatNestedInput>;
}
export declare class ChatUncheckedUpdateWithoutTargetsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutChatNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutChatNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutChatNestedInput>;
}
export declare class ChatUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutChatNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutChatNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutChatNestedInput>;
    targets?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutChatNestedInput>;
}
export declare class ChatUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ChatUpdateOneRequiredWithoutActivitiesNestedInput {
    create?: InstanceType<typeof ChatCreateWithoutActivitiesInput>;
    connectOrCreate?: InstanceType<typeof ChatCreateOrConnectWithoutActivitiesInput>;
    upsert?: InstanceType<typeof ChatUpsertWithoutActivitiesInput>;
    connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ChatUpdateToOneWithWhereWithoutActivitiesInput>;
}
export declare class ChatUpdateOneRequiredWithoutTargetsNestedInput {
    create?: InstanceType<typeof ChatCreateWithoutTargetsInput>;
    connectOrCreate?: InstanceType<typeof ChatCreateOrConnectWithoutTargetsInput>;
    upsert?: InstanceType<typeof ChatUpsertWithoutTargetsInput>;
    connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ChatUpdateToOneWithWhereWithoutTargetsInput>;
}
export declare class ChatUpdateOneWithoutClubsNestedInput {
    create?: InstanceType<typeof ChatCreateWithoutClubsInput>;
    connectOrCreate?: InstanceType<typeof ChatCreateOrConnectWithoutClubsInput>;
    upsert?: InstanceType<typeof ChatUpsertWithoutClubsInput>;
    disconnect?: InstanceType<typeof ChatWhereInput>;
    delete?: InstanceType<typeof ChatWhereInput>;
    connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ChatUpdateToOneWithWhereWithoutClubsInput>;
}
export declare class ChatUpdateOneWithoutCoursesNestedInput {
    create?: InstanceType<typeof ChatCreateWithoutCoursesInput>;
    connectOrCreate?: InstanceType<typeof ChatCreateOrConnectWithoutCoursesInput>;
    upsert?: InstanceType<typeof ChatUpsertWithoutCoursesInput>;
    disconnect?: InstanceType<typeof ChatWhereInput>;
    delete?: InstanceType<typeof ChatWhereInput>;
    connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ChatUpdateToOneWithWhereWithoutCoursesInput>;
}
export declare class ChatUpdateToOneWithWhereWithoutActivitiesInput {
    where?: InstanceType<typeof ChatWhereInput>;
    data: InstanceType<typeof ChatUpdateWithoutActivitiesInput>;
}
export declare class ChatUpdateToOneWithWhereWithoutClubsInput {
    where?: InstanceType<typeof ChatWhereInput>;
    data: InstanceType<typeof ChatUpdateWithoutClubsInput>;
}
export declare class ChatUpdateToOneWithWhereWithoutCoursesInput {
    where?: InstanceType<typeof ChatWhereInput>;
    data: InstanceType<typeof ChatUpdateWithoutCoursesInput>;
}
export declare class ChatUpdateToOneWithWhereWithoutTargetsInput {
    where?: InstanceType<typeof ChatWhereInput>;
    data: InstanceType<typeof ChatUpdateWithoutTargetsInput>;
}
export declare class ChatUpdateWithoutActivitiesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutChatNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutChatNestedInput>;
    targets?: InstanceType<typeof UserChatUpdateManyWithoutChatNestedInput>;
}
export declare class ChatUpdateWithoutClubsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof ChatActivityUpdateManyWithoutChatNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutChatNestedInput>;
    targets?: InstanceType<typeof UserChatUpdateManyWithoutChatNestedInput>;
}
export declare class ChatUpdateWithoutCoursesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof ChatActivityUpdateManyWithoutChatNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutChatNestedInput>;
    targets?: InstanceType<typeof UserChatUpdateManyWithoutChatNestedInput>;
}
export declare class ChatUpdateWithoutTargetsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof ChatActivityUpdateManyWithoutChatNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutChatNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutChatNestedInput>;
}
export declare class ChatUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof ChatActivityUpdateManyWithoutChatNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutChatNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutChatNestedInput>;
    targets?: InstanceType<typeof UserChatUpdateManyWithoutChatNestedInput>;
}
export declare class ChatUpsertWithoutActivitiesInput {
    update: InstanceType<typeof ChatUpdateWithoutActivitiesInput>;
    create: InstanceType<typeof ChatCreateWithoutActivitiesInput>;
    where?: InstanceType<typeof ChatWhereInput>;
}
export declare class ChatUpsertWithoutClubsInput {
    update: InstanceType<typeof ChatUpdateWithoutClubsInput>;
    create: InstanceType<typeof ChatCreateWithoutClubsInput>;
    where?: InstanceType<typeof ChatWhereInput>;
}
export declare class ChatUpsertWithoutCoursesInput {
    update: InstanceType<typeof ChatUpdateWithoutCoursesInput>;
    create: InstanceType<typeof ChatCreateWithoutCoursesInput>;
    where?: InstanceType<typeof ChatWhereInput>;
}
export declare class ChatUpsertWithoutTargetsInput {
    update: InstanceType<typeof ChatUpdateWithoutTargetsInput>;
    create: InstanceType<typeof ChatCreateWithoutTargetsInput>;
    where?: InstanceType<typeof ChatWhereInput>;
}
export declare class ChatWhereUniqueInput {
    id?: string;
    AND?: Array<ChatWhereInput>;
    OR?: Array<ChatWhereInput>;
    NOT?: Array<ChatWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    avatar?: InstanceType<typeof StringNullableFilter>;
    name?: InstanceType<typeof StringFilter>;
    type?: InstanceType<typeof StringFilter>;
    activities?: InstanceType<typeof ChatActivityListRelationFilter>;
    clubs?: InstanceType<typeof ClubListRelationFilter>;
    courses?: InstanceType<typeof CourseListRelationFilter>;
    targets?: InstanceType<typeof UserChatListRelationFilter>;
}
export declare class ChatWhereInput {
    AND?: Array<ChatWhereInput>;
    OR?: Array<ChatWhereInput>;
    NOT?: Array<ChatWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    avatar?: InstanceType<typeof StringNullableFilter>;
    name?: InstanceType<typeof StringFilter>;
    type?: InstanceType<typeof StringFilter>;
    activities?: InstanceType<typeof ChatActivityListRelationFilter>;
    clubs?: InstanceType<typeof ClubListRelationFilter>;
    courses?: InstanceType<typeof CourseListRelationFilter>;
    targets?: InstanceType<typeof UserChatListRelationFilter>;
}
export declare class Chat {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    avatar: string | null;
    name: string;
    type: string;
    activities?: Array<ChatActivity>;
    clubs?: Array<Club>;
    courses?: Array<Course>;
    targets?: Array<UserChat>;
    _count?: InstanceType<typeof ChatCount>;
}
export declare class CreateManyChatArgs {
    data: Array<ChatCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneChatArgs {
    data: InstanceType<typeof ChatCreateInput>;
}
export declare class DeleteManyChatArgs {
    where?: InstanceType<typeof ChatWhereInput>;
}
export declare class DeleteOneChatArgs {
    where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
}
export declare class FindFirstChatOrThrowArgs {
    where?: InstanceType<typeof ChatWhereInput>;
    orderBy?: Array<ChatOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ChatScalarFieldEnum>;
}
export declare class FindFirstChatArgs {
    where?: InstanceType<typeof ChatWhereInput>;
    orderBy?: Array<ChatOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ChatScalarFieldEnum>;
}
export declare class FindManyChatArgs {
    where?: InstanceType<typeof ChatWhereInput>;
    orderBy?: Array<ChatOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ChatScalarFieldEnum>;
}
export declare class FindUniqueChatOrThrowArgs {
    where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
}
export declare class FindUniqueChatArgs {
    where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
}
export declare class UpdateManyChatArgs {
    data: InstanceType<typeof ChatUpdateManyMutationInput>;
    where?: InstanceType<typeof ChatWhereInput>;
}
export declare class UpdateOneChatArgs {
    data: InstanceType<typeof ChatUpdateInput>;
    where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
}
export declare class UpsertOneChatArgs {
    where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ChatCreateInput>;
    update: InstanceType<typeof ChatUpdateInput>;
}
export declare class AggregateChatActivity {
    _count?: InstanceType<typeof ChatActivityCountAggregate>;
    _min?: InstanceType<typeof ChatActivityMinAggregate>;
    _max?: InstanceType<typeof ChatActivityMaxAggregate>;
}
export declare class ChatActivityAggregateArgs {
    where?: InstanceType<typeof ChatActivityWhereInput>;
    orderBy?: Array<ChatActivityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ChatActivityCountAggregateInput>;
    _min?: InstanceType<typeof ChatActivityMinAggregateInput>;
    _max?: InstanceType<typeof ChatActivityMaxAggregateInput>;
}
export declare class ChatActivityCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    chatId?: true;
    targetId?: true;
    type?: true;
    value?: true;
    pinned?: true;
    _all?: true;
}
export declare class ChatActivityCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    chatId: number;
    targetId: number;
    type: number;
    value: number;
    pinned: number;
    _all: number;
}
export declare class ChatActivityCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: keyof typeof SortOrder;
    targetId?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    value?: keyof typeof SortOrder;
    pinned?: keyof typeof SortOrder;
}
export declare class ChatActivityCount {
    executor?: number;
}
export declare class ChatActivityCreateManyChatInputEnvelope {
    data: Array<ChatActivityCreateManyChatInput>;
    skipDuplicates?: boolean;
}
export declare class ChatActivityCreateManyChatInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    targetId?: string;
    type: keyof typeof ChatActivityType;
    value?: InstanceType<typeof ChatActivityCreatevalueInput>;
    pinned?: boolean;
}
export declare class ChatActivityCreateManyTargetInputEnvelope {
    data: Array<ChatActivityCreateManyTargetInput>;
    skipDuplicates?: boolean;
}
export declare class ChatActivityCreateManyTargetInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId: string;
    type: keyof typeof ChatActivityType;
    value?: InstanceType<typeof ChatActivityCreatevalueInput>;
    pinned?: boolean;
}
export declare class ChatActivityCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId: string;
    targetId?: string;
    type: keyof typeof ChatActivityType;
    value?: InstanceType<typeof ChatActivityCreatevalueInput>;
    pinned?: boolean;
}
export declare class ChatActivityCreateNestedManyWithoutChatInput {
    create?: Array<ChatActivityCreateWithoutChatInput>;
    connectOrCreate?: Array<ChatActivityCreateOrConnectWithoutChatInput>;
    createMany?: InstanceType<typeof ChatActivityCreateManyChatInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
}
export declare class ChatActivityCreateNestedManyWithoutTargetInput {
    create?: Array<ChatActivityCreateWithoutTargetInput>;
    connectOrCreate?: Array<ChatActivityCreateOrConnectWithoutTargetInput>;
    createMany?: InstanceType<typeof ChatActivityCreateManyTargetInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
}
export declare class ChatActivityCreateNestedOneWithoutExecutorInput {
    create?: InstanceType<typeof ChatActivityCreateWithoutExecutorInput>;
    connectOrCreate?: InstanceType<typeof ChatActivityCreateOrConnectWithoutExecutorInput>;
    connect?: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
}
export declare class ChatActivityCreateOrConnectWithoutChatInput {
    where: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ChatActivityCreateWithoutChatInput>;
}
export declare class ChatActivityCreateOrConnectWithoutExecutorInput {
    where: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ChatActivityCreateWithoutExecutorInput>;
}
export declare class ChatActivityCreateOrConnectWithoutTargetInput {
    where: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ChatActivityCreateWithoutTargetInput>;
}
export declare class ChatActivityCreateWithoutChatInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type: keyof typeof ChatActivityType;
    value?: InstanceType<typeof ChatActivityCreatevalueInput>;
    pinned?: boolean;
    executor?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutChatActivityInput>;
    target?: InstanceType<typeof UserCreateNestedOneWithoutTargetActivitiesInput>;
}
export declare class ChatActivityCreateWithoutExecutorInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type: keyof typeof ChatActivityType;
    value?: InstanceType<typeof ChatActivityCreatevalueInput>;
    pinned?: boolean;
    chat: InstanceType<typeof ChatCreateNestedOneWithoutActivitiesInput>;
    target?: InstanceType<typeof UserCreateNestedOneWithoutTargetActivitiesInput>;
}
export declare class ChatActivityCreateWithoutTargetInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type: keyof typeof ChatActivityType;
    value?: InstanceType<typeof ChatActivityCreatevalueInput>;
    pinned?: boolean;
    chat: InstanceType<typeof ChatCreateNestedOneWithoutActivitiesInput>;
    executor?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutChatActivityInput>;
}
export declare class ChatActivityCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type: keyof typeof ChatActivityType;
    value?: InstanceType<typeof ChatActivityCreatevalueInput>;
    pinned?: boolean;
    chat: InstanceType<typeof ChatCreateNestedOneWithoutActivitiesInput>;
    executor?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutChatActivityInput>;
    target?: InstanceType<typeof UserCreateNestedOneWithoutTargetActivitiesInput>;
}
export declare class ChatActivityCreatevalueInput {
    set: Array<any>;
}
export declare class ChatActivityGroupByArgs {
    where?: InstanceType<typeof ChatActivityWhereInput>;
    orderBy?: Array<ChatActivityOrderByWithAggregationInput>;
    by: Array<keyof typeof ChatActivityScalarFieldEnum>;
    having?: InstanceType<typeof ChatActivityScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ChatActivityCountAggregateInput>;
    _min?: InstanceType<typeof ChatActivityMinAggregateInput>;
    _max?: InstanceType<typeof ChatActivityMaxAggregateInput>;
}
export declare class ChatActivityGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    chatId: string;
    targetId?: string;
    type: keyof typeof ChatActivityType;
    value?: Array<any>;
    pinned: boolean;
    _count?: InstanceType<typeof ChatActivityCountAggregate>;
    _min?: InstanceType<typeof ChatActivityMinAggregate>;
    _max?: InstanceType<typeof ChatActivityMaxAggregate>;
}
export declare class ChatActivityListRelationFilter {
    every?: InstanceType<typeof ChatActivityWhereInput>;
    some?: InstanceType<typeof ChatActivityWhereInput>;
    none?: InstanceType<typeof ChatActivityWhereInput>;
}
export declare class ChatActivityMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    chatId?: true;
    targetId?: true;
    type?: true;
    pinned?: true;
}
export declare class ChatActivityMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    targetId?: string;
    type?: keyof typeof ChatActivityType;
    pinned?: boolean;
}
export declare class ChatActivityMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: keyof typeof SortOrder;
    targetId?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    pinned?: keyof typeof SortOrder;
}
export declare class ChatActivityMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    chatId?: true;
    targetId?: true;
    type?: true;
    pinned?: true;
}
export declare class ChatActivityMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    targetId?: string;
    type?: keyof typeof ChatActivityType;
    pinned?: boolean;
}
export declare class ChatActivityMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: keyof typeof SortOrder;
    targetId?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    pinned?: keyof typeof SortOrder;
}
export declare class ChatActivityOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ChatActivityOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: keyof typeof SortOrder;
    targetId?: InstanceType<typeof SortOrderInput>;
    type?: keyof typeof SortOrder;
    value?: keyof typeof SortOrder;
    pinned?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ChatActivityCountOrderByAggregateInput>;
    _max?: InstanceType<typeof ChatActivityMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ChatActivityMinOrderByAggregateInput>;
}
export declare class ChatActivityOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: keyof typeof SortOrder;
    targetId?: InstanceType<typeof SortOrderInput>;
    type?: keyof typeof SortOrder;
    value?: keyof typeof SortOrder;
    pinned?: keyof typeof SortOrder;
    chat?: InstanceType<typeof ChatOrderByWithRelationInput>;
    executor?: InstanceType<typeof UserChatActivityOrderByRelationAggregateInput>;
    target?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class ChatActivityRelationFilter {
    is?: InstanceType<typeof ChatActivityWhereInput>;
    isNot?: InstanceType<typeof ChatActivityWhereInput>;
}
export declare class ChatActivityScalarWhereWithAggregatesInput {
    AND?: Array<ChatActivityScalarWhereWithAggregatesInput>;
    OR?: Array<ChatActivityScalarWhereWithAggregatesInput>;
    NOT?: Array<ChatActivityScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    chatId?: InstanceType<typeof UuidWithAggregatesFilter>;
    targetId?: InstanceType<typeof UuidNullableWithAggregatesFilter>;
    type?: InstanceType<typeof EnumChatActivityTypeWithAggregatesFilter>;
    value?: InstanceType<typeof JsonNullableListFilter>;
    pinned?: InstanceType<typeof BoolWithAggregatesFilter>;
}
export declare class ChatActivityScalarWhereInput {
    AND?: Array<ChatActivityScalarWhereInput>;
    OR?: Array<ChatActivityScalarWhereInput>;
    NOT?: Array<ChatActivityScalarWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    chatId?: InstanceType<typeof UuidFilter>;
    targetId?: InstanceType<typeof UuidNullableFilter>;
    type?: InstanceType<typeof EnumChatActivityTypeFilter>;
    value?: InstanceType<typeof JsonNullableListFilter>;
    pinned?: InstanceType<typeof BoolFilter>;
}
export declare class ChatActivityUncheckedCreateNestedManyWithoutChatInput {
    create?: Array<ChatActivityCreateWithoutChatInput>;
    connectOrCreate?: Array<ChatActivityCreateOrConnectWithoutChatInput>;
    createMany?: InstanceType<typeof ChatActivityCreateManyChatInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
}
export declare class ChatActivityUncheckedCreateNestedManyWithoutTargetInput {
    create?: Array<ChatActivityCreateWithoutTargetInput>;
    connectOrCreate?: Array<ChatActivityCreateOrConnectWithoutTargetInput>;
    createMany?: InstanceType<typeof ChatActivityCreateManyTargetInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
}
export declare class ChatActivityUncheckedCreateWithoutChatInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    targetId?: string;
    type: keyof typeof ChatActivityType;
    value?: InstanceType<typeof ChatActivityCreatevalueInput>;
    pinned?: boolean;
    executor?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutChatActivityInput>;
}
export declare class ChatActivityUncheckedCreateWithoutExecutorInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId: string;
    targetId?: string;
    type: keyof typeof ChatActivityType;
    value?: InstanceType<typeof ChatActivityCreatevalueInput>;
    pinned?: boolean;
}
export declare class ChatActivityUncheckedCreateWithoutTargetInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId: string;
    type: keyof typeof ChatActivityType;
    value?: InstanceType<typeof ChatActivityCreatevalueInput>;
    pinned?: boolean;
    executor?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutChatActivityInput>;
}
export declare class ChatActivityUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId: string;
    targetId?: string;
    type: keyof typeof ChatActivityType;
    value?: InstanceType<typeof ChatActivityCreatevalueInput>;
    pinned?: boolean;
    executor?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutChatActivityInput>;
}
export declare class ChatActivityUncheckedUpdateManyWithoutChatNestedInput {
    create?: Array<ChatActivityCreateWithoutChatInput>;
    connectOrCreate?: Array<ChatActivityCreateOrConnectWithoutChatInput>;
    upsert?: Array<ChatActivityUpsertWithWhereUniqueWithoutChatInput>;
    createMany?: InstanceType<typeof ChatActivityCreateManyChatInputEnvelope>;
    set?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
    update?: Array<ChatActivityUpdateWithWhereUniqueWithoutChatInput>;
    updateMany?: Array<ChatActivityUpdateManyWithWhereWithoutChatInput>;
    deleteMany?: Array<ChatActivityScalarWhereInput>;
}
export declare class ChatActivityUncheckedUpdateManyWithoutChatInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    targetId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumChatActivityTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof ChatActivityUpdatevalueInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class ChatActivityUncheckedUpdateManyWithoutTargetNestedInput {
    create?: Array<ChatActivityCreateWithoutTargetInput>;
    connectOrCreate?: Array<ChatActivityCreateOrConnectWithoutTargetInput>;
    upsert?: Array<ChatActivityUpsertWithWhereUniqueWithoutTargetInput>;
    createMany?: InstanceType<typeof ChatActivityCreateManyTargetInputEnvelope>;
    set?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
    update?: Array<ChatActivityUpdateWithWhereUniqueWithoutTargetInput>;
    updateMany?: Array<ChatActivityUpdateManyWithWhereWithoutTargetInput>;
    deleteMany?: Array<ChatActivityScalarWhereInput>;
}
export declare class ChatActivityUncheckedUpdateManyWithoutTargetInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumChatActivityTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof ChatActivityUpdatevalueInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class ChatActivityUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    targetId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumChatActivityTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof ChatActivityUpdatevalueInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class ChatActivityUncheckedUpdateWithoutChatInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    targetId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumChatActivityTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof ChatActivityUpdatevalueInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    executor?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutChatActivityNestedInput>;
}
export declare class ChatActivityUncheckedUpdateWithoutExecutorInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    targetId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumChatActivityTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof ChatActivityUpdatevalueInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class ChatActivityUncheckedUpdateWithoutTargetInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumChatActivityTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof ChatActivityUpdatevalueInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    executor?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutChatActivityNestedInput>;
}
export declare class ChatActivityUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    targetId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumChatActivityTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof ChatActivityUpdatevalueInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    executor?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutChatActivityNestedInput>;
}
export declare class ChatActivityUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumChatActivityTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof ChatActivityUpdatevalueInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class ChatActivityUpdateManyWithWhereWithoutChatInput {
    where: InstanceType<typeof ChatActivityScalarWhereInput>;
    data: InstanceType<typeof ChatActivityUpdateManyMutationInput>;
}
export declare class ChatActivityUpdateManyWithWhereWithoutTargetInput {
    where: InstanceType<typeof ChatActivityScalarWhereInput>;
    data: InstanceType<typeof ChatActivityUpdateManyMutationInput>;
}
export declare class ChatActivityUpdateManyWithoutChatNestedInput {
    create?: Array<ChatActivityCreateWithoutChatInput>;
    connectOrCreate?: Array<ChatActivityCreateOrConnectWithoutChatInput>;
    upsert?: Array<ChatActivityUpsertWithWhereUniqueWithoutChatInput>;
    createMany?: InstanceType<typeof ChatActivityCreateManyChatInputEnvelope>;
    set?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
    update?: Array<ChatActivityUpdateWithWhereUniqueWithoutChatInput>;
    updateMany?: Array<ChatActivityUpdateManyWithWhereWithoutChatInput>;
    deleteMany?: Array<ChatActivityScalarWhereInput>;
}
export declare class ChatActivityUpdateManyWithoutTargetNestedInput {
    create?: Array<ChatActivityCreateWithoutTargetInput>;
    connectOrCreate?: Array<ChatActivityCreateOrConnectWithoutTargetInput>;
    upsert?: Array<ChatActivityUpsertWithWhereUniqueWithoutTargetInput>;
    createMany?: InstanceType<typeof ChatActivityCreateManyTargetInputEnvelope>;
    set?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>>;
    update?: Array<ChatActivityUpdateWithWhereUniqueWithoutTargetInput>;
    updateMany?: Array<ChatActivityUpdateManyWithWhereWithoutTargetInput>;
    deleteMany?: Array<ChatActivityScalarWhereInput>;
}
export declare class ChatActivityUpdateOneRequiredWithoutExecutorNestedInput {
    create?: InstanceType<typeof ChatActivityCreateWithoutExecutorInput>;
    connectOrCreate?: InstanceType<typeof ChatActivityCreateOrConnectWithoutExecutorInput>;
    upsert?: InstanceType<typeof ChatActivityUpsertWithoutExecutorInput>;
    connect?: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof ChatActivityUpdateToOneWithWhereWithoutExecutorInput>;
}
export declare class ChatActivityUpdateToOneWithWhereWithoutExecutorInput {
    where?: InstanceType<typeof ChatActivityWhereInput>;
    data: InstanceType<typeof ChatActivityUpdateWithoutExecutorInput>;
}
export declare class ChatActivityUpdateWithWhereUniqueWithoutChatInput {
    where: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ChatActivityUpdateWithoutChatInput>;
}
export declare class ChatActivityUpdateWithWhereUniqueWithoutTargetInput {
    where: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ChatActivityUpdateWithoutTargetInput>;
}
export declare class ChatActivityUpdateWithoutChatInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumChatActivityTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof ChatActivityUpdatevalueInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    executor?: InstanceType<typeof UserChatActivityUpdateManyWithoutChatActivityNestedInput>;
    target?: InstanceType<typeof UserUpdateOneWithoutTargetActivitiesNestedInput>;
}
export declare class ChatActivityUpdateWithoutExecutorInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumChatActivityTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof ChatActivityUpdatevalueInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    chat?: InstanceType<typeof ChatUpdateOneRequiredWithoutActivitiesNestedInput>;
    target?: InstanceType<typeof UserUpdateOneWithoutTargetActivitiesNestedInput>;
}
export declare class ChatActivityUpdateWithoutTargetInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumChatActivityTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof ChatActivityUpdatevalueInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    chat?: InstanceType<typeof ChatUpdateOneRequiredWithoutActivitiesNestedInput>;
    executor?: InstanceType<typeof UserChatActivityUpdateManyWithoutChatActivityNestedInput>;
}
export declare class ChatActivityUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumChatActivityTypeFieldUpdateOperationsInput>;
    value?: InstanceType<typeof ChatActivityUpdatevalueInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    chat?: InstanceType<typeof ChatUpdateOneRequiredWithoutActivitiesNestedInput>;
    executor?: InstanceType<typeof UserChatActivityUpdateManyWithoutChatActivityNestedInput>;
    target?: InstanceType<typeof UserUpdateOneWithoutTargetActivitiesNestedInput>;
}
export declare class ChatActivityUpdatevalueInput {
    set?: Array<any>;
    push?: Array<any>;
}
export declare class ChatActivityUpsertWithWhereUniqueWithoutChatInput {
    where: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ChatActivityUpdateWithoutChatInput>;
    create: InstanceType<typeof ChatActivityCreateWithoutChatInput>;
}
export declare class ChatActivityUpsertWithWhereUniqueWithoutTargetInput {
    where: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ChatActivityUpdateWithoutTargetInput>;
    create: InstanceType<typeof ChatActivityCreateWithoutTargetInput>;
}
export declare class ChatActivityUpsertWithoutExecutorInput {
    update: InstanceType<typeof ChatActivityUpdateWithoutExecutorInput>;
    create: InstanceType<typeof ChatActivityCreateWithoutExecutorInput>;
    where?: InstanceType<typeof ChatActivityWhereInput>;
}
export declare class ChatActivityWhereUniqueInput {
    id?: string;
    AND?: Array<ChatActivityWhereInput>;
    OR?: Array<ChatActivityWhereInput>;
    NOT?: Array<ChatActivityWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    chatId?: InstanceType<typeof UuidFilter>;
    targetId?: InstanceType<typeof UuidNullableFilter>;
    type?: InstanceType<typeof EnumChatActivityTypeFilter>;
    value?: InstanceType<typeof JsonNullableListFilter>;
    pinned?: InstanceType<typeof BoolFilter>;
    chat?: InstanceType<typeof ChatRelationFilter>;
    executor?: InstanceType<typeof UserChatActivityListRelationFilter>;
    target?: InstanceType<typeof UserNullableRelationFilter>;
}
export declare class ChatActivityWhereInput {
    AND?: Array<ChatActivityWhereInput>;
    OR?: Array<ChatActivityWhereInput>;
    NOT?: Array<ChatActivityWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    chatId?: InstanceType<typeof UuidFilter>;
    targetId?: InstanceType<typeof UuidNullableFilter>;
    type?: InstanceType<typeof EnumChatActivityTypeFilter>;
    value?: InstanceType<typeof JsonNullableListFilter>;
    pinned?: InstanceType<typeof BoolFilter>;
    chat?: InstanceType<typeof ChatRelationFilter>;
    executor?: InstanceType<typeof UserChatActivityListRelationFilter>;
    target?: InstanceType<typeof UserNullableRelationFilter>;
}
export declare class ChatActivity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    chatId: string;
    targetId: string | null;
    type: keyof typeof ChatActivityType;
    value: Array<any>;
    pinned: boolean;
    chat?: InstanceType<typeof Chat>;
    executor?: Array<UserChatActivity>;
    target?: InstanceType<typeof User> | null;
    _count?: InstanceType<typeof ChatActivityCount>;
}
export declare class CreateManyChatActivityArgs {
    data: Array<ChatActivityCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneChatActivityArgs {
    data: InstanceType<typeof ChatActivityCreateInput>;
}
export declare class DeleteManyChatActivityArgs {
    where?: InstanceType<typeof ChatActivityWhereInput>;
}
export declare class DeleteOneChatActivityArgs {
    where: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
}
export declare class FindFirstChatActivityOrThrowArgs {
    where?: InstanceType<typeof ChatActivityWhereInput>;
    orderBy?: Array<ChatActivityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ChatActivityScalarFieldEnum>;
}
export declare class FindFirstChatActivityArgs {
    where?: InstanceType<typeof ChatActivityWhereInput>;
    orderBy?: Array<ChatActivityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ChatActivityScalarFieldEnum>;
}
export declare class FindManyChatActivityArgs {
    where?: InstanceType<typeof ChatActivityWhereInput>;
    orderBy?: Array<ChatActivityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ChatActivityScalarFieldEnum>;
}
export declare class FindUniqueChatActivityOrThrowArgs {
    where: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
}
export declare class FindUniqueChatActivityArgs {
    where: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
}
export declare class UpdateManyChatActivityArgs {
    data: InstanceType<typeof ChatActivityUpdateManyMutationInput>;
    where?: InstanceType<typeof ChatActivityWhereInput>;
}
export declare class UpdateOneChatActivityArgs {
    data: InstanceType<typeof ChatActivityUpdateInput>;
    where: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
}
export declare class UpsertOneChatActivityArgs {
    where: Prisma.AtLeast<ChatActivityWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ChatActivityCreateInput>;
    update: InstanceType<typeof ChatActivityUpdateInput>;
}
export declare class AggregateClass {
    _count?: InstanceType<typeof ClassCountAggregate>;
    _min?: InstanceType<typeof ClassMinAggregate>;
    _max?: InstanceType<typeof ClassMaxAggregate>;
}
export declare class ClassAggregateArgs {
    where?: InstanceType<typeof ClassWhereInput>;
    orderBy?: Array<ClassOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClassCountAggregateInput>;
    _min?: InstanceType<typeof ClassMinAggregateInput>;
    _max?: InstanceType<typeof ClassMaxAggregateInput>;
}
export declare class ClassCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    gradeId?: true;
    schoolId?: true;
    specifiedGrade?: true;
    _all?: true;
}
export declare class ClassCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    gradeId: number;
    schoolId: number;
    specifiedGrade: number;
    _all: number;
}
export declare class ClassCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    gradeId?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    specifiedGrade?: keyof typeof SortOrder;
}
export declare class ClassCount {
    courses?: number;
    members?: number;
}
export declare class ClassCreateManyGradeInputEnvelope {
    data: Array<ClassCreateManyGradeInput>;
    skipDuplicates?: boolean;
}
export declare class ClassCreateManyGradeInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schoolId: string;
    specifiedGrade?: string;
}
export declare class ClassCreateManySchoolInputEnvelope {
    data: Array<ClassCreateManySchoolInput>;
    skipDuplicates?: boolean;
}
export declare class ClassCreateManySchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gradeId: string;
    specifiedGrade?: string;
}
export declare class ClassCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gradeId: string;
    schoolId: string;
    specifiedGrade?: string;
}
export declare class ClassCreateNestedManyWithoutCoursesInput {
    create?: Array<ClassCreateWithoutCoursesInput>;
    connectOrCreate?: Array<ClassCreateOrConnectWithoutCoursesInput>;
    connect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
}
export declare class ClassCreateNestedManyWithoutGradeInput {
    create?: Array<ClassCreateWithoutGradeInput>;
    connectOrCreate?: Array<ClassCreateOrConnectWithoutGradeInput>;
    createMany?: InstanceType<typeof ClassCreateManyGradeInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
}
export declare class ClassCreateNestedManyWithoutMembersInput {
    create?: Array<ClassCreateWithoutMembersInput>;
    connectOrCreate?: Array<ClassCreateOrConnectWithoutMembersInput>;
    connect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
}
export declare class ClassCreateNestedManyWithoutSchoolInput {
    create?: Array<ClassCreateWithoutSchoolInput>;
    connectOrCreate?: Array<ClassCreateOrConnectWithoutSchoolInput>;
    createMany?: InstanceType<typeof ClassCreateManySchoolInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
}
export declare class ClassCreateOrConnectWithoutCoursesInput {
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClassCreateWithoutCoursesInput>;
}
export declare class ClassCreateOrConnectWithoutGradeInput {
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClassCreateWithoutGradeInput>;
}
export declare class ClassCreateOrConnectWithoutMembersInput {
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClassCreateWithoutMembersInput>;
}
export declare class ClassCreateOrConnectWithoutSchoolInput {
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClassCreateWithoutSchoolInput>;
}
export declare class ClassCreateWithoutCoursesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    specifiedGrade?: string;
    grade: InstanceType<typeof GradeCreateNestedOneWithoutClassesInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutClassesInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutClassesInput>;
}
export declare class ClassCreateWithoutGradeInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    specifiedGrade?: string;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutClassesInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutClassesInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutClassesInput>;
}
export declare class ClassCreateWithoutMembersInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    specifiedGrade?: string;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutClassesInput>;
    grade: InstanceType<typeof GradeCreateNestedOneWithoutClassesInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutClassesInput>;
}
export declare class ClassCreateWithoutSchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    specifiedGrade?: string;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutClassesInput>;
    grade: InstanceType<typeof GradeCreateNestedOneWithoutClassesInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutClassesInput>;
}
export declare class ClassCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    specifiedGrade?: string;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutClassesInput>;
    grade: InstanceType<typeof GradeCreateNestedOneWithoutClassesInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutClassesInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutClassesInput>;
}
export declare class ClassGroupByArgs {
    where?: InstanceType<typeof ClassWhereInput>;
    orderBy?: Array<ClassOrderByWithAggregationInput>;
    by: Array<keyof typeof ClassScalarFieldEnum>;
    having?: InstanceType<typeof ClassScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClassCountAggregateInput>;
    _min?: InstanceType<typeof ClassMinAggregateInput>;
    _max?: InstanceType<typeof ClassMaxAggregateInput>;
}
export declare class ClassGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    gradeId: string;
    schoolId: string;
    specifiedGrade?: string;
    _count?: InstanceType<typeof ClassCountAggregate>;
    _min?: InstanceType<typeof ClassMinAggregate>;
    _max?: InstanceType<typeof ClassMaxAggregate>;
}
export declare class ClassListRelationFilter {
    every?: InstanceType<typeof ClassWhereInput>;
    some?: InstanceType<typeof ClassWhereInput>;
    none?: InstanceType<typeof ClassWhereInput>;
}
export declare class ClassMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    gradeId?: true;
    schoolId?: true;
    specifiedGrade?: true;
}
export declare class ClassMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gradeId?: string;
    schoolId?: string;
    specifiedGrade?: string;
}
export declare class ClassMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    gradeId?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    specifiedGrade?: keyof typeof SortOrder;
}
export declare class ClassMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    gradeId?: true;
    schoolId?: true;
    specifiedGrade?: true;
}
export declare class ClassMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gradeId?: string;
    schoolId?: string;
    specifiedGrade?: string;
}
export declare class ClassMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    gradeId?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    specifiedGrade?: keyof typeof SortOrder;
}
export declare class ClassOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ClassOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    gradeId?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    specifiedGrade?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof ClassCountOrderByAggregateInput>;
    _max?: InstanceType<typeof ClassMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ClassMinOrderByAggregateInput>;
}
export declare class ClassOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    gradeId?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    specifiedGrade?: InstanceType<typeof SortOrderInput>;
    courses?: InstanceType<typeof CourseOrderByRelationAggregateInput>;
    grade?: InstanceType<typeof GradeOrderByWithRelationInput>;
    members?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    school?: InstanceType<typeof SchoolOrderByWithRelationInput>;
}
export declare class ClassScalarWhereWithAggregatesInput {
    AND?: Array<ClassScalarWhereWithAggregatesInput>;
    OR?: Array<ClassScalarWhereWithAggregatesInput>;
    NOT?: Array<ClassScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    gradeId?: InstanceType<typeof UuidWithAggregatesFilter>;
    schoolId?: InstanceType<typeof UuidWithAggregatesFilter>;
    specifiedGrade?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}
export declare class ClassScalarWhereInput {
    AND?: Array<ClassScalarWhereInput>;
    OR?: Array<ClassScalarWhereInput>;
    NOT?: Array<ClassScalarWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    gradeId?: InstanceType<typeof UuidFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
    specifiedGrade?: InstanceType<typeof StringNullableFilter>;
}
export declare class ClassUncheckedCreateNestedManyWithoutCoursesInput {
    create?: Array<ClassCreateWithoutCoursesInput>;
    connectOrCreate?: Array<ClassCreateOrConnectWithoutCoursesInput>;
    connect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
}
export declare class ClassUncheckedCreateNestedManyWithoutGradeInput {
    create?: Array<ClassCreateWithoutGradeInput>;
    connectOrCreate?: Array<ClassCreateOrConnectWithoutGradeInput>;
    createMany?: InstanceType<typeof ClassCreateManyGradeInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
}
export declare class ClassUncheckedCreateNestedManyWithoutMembersInput {
    create?: Array<ClassCreateWithoutMembersInput>;
    connectOrCreate?: Array<ClassCreateOrConnectWithoutMembersInput>;
    connect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
}
export declare class ClassUncheckedCreateNestedManyWithoutSchoolInput {
    create?: Array<ClassCreateWithoutSchoolInput>;
    connectOrCreate?: Array<ClassCreateOrConnectWithoutSchoolInput>;
    createMany?: InstanceType<typeof ClassCreateManySchoolInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
}
export declare class ClassUncheckedCreateWithoutCoursesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gradeId: string;
    schoolId: string;
    specifiedGrade?: string;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClassesInput>;
}
export declare class ClassUncheckedCreateWithoutGradeInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schoolId: string;
    specifiedGrade?: string;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutClassesInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClassesInput>;
}
export declare class ClassUncheckedCreateWithoutMembersInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gradeId: string;
    schoolId: string;
    specifiedGrade?: string;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutClassesInput>;
}
export declare class ClassUncheckedCreateWithoutSchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gradeId: string;
    specifiedGrade?: string;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutClassesInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClassesInput>;
}
export declare class ClassUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gradeId: string;
    schoolId: string;
    specifiedGrade?: string;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutClassesInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClassesInput>;
}
export declare class ClassUncheckedUpdateManyWithoutCoursesNestedInput {
    create?: Array<ClassCreateWithoutCoursesInput>;
    connectOrCreate?: Array<ClassCreateOrConnectWithoutCoursesInput>;
    upsert?: Array<ClassUpsertWithWhereUniqueWithoutCoursesInput>;
    set?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    update?: Array<ClassUpdateWithWhereUniqueWithoutCoursesInput>;
    updateMany?: Array<ClassUpdateManyWithWhereWithoutCoursesInput>;
    deleteMany?: Array<ClassScalarWhereInput>;
}
export declare class ClassUncheckedUpdateManyWithoutCoursesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    gradeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    specifiedGrade?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ClassUncheckedUpdateManyWithoutGradeNestedInput {
    create?: Array<ClassCreateWithoutGradeInput>;
    connectOrCreate?: Array<ClassCreateOrConnectWithoutGradeInput>;
    upsert?: Array<ClassUpsertWithWhereUniqueWithoutGradeInput>;
    createMany?: InstanceType<typeof ClassCreateManyGradeInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    update?: Array<ClassUpdateWithWhereUniqueWithoutGradeInput>;
    updateMany?: Array<ClassUpdateManyWithWhereWithoutGradeInput>;
    deleteMany?: Array<ClassScalarWhereInput>;
}
export declare class ClassUncheckedUpdateManyWithoutGradeInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    specifiedGrade?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ClassUncheckedUpdateManyWithoutMembersNestedInput {
    create?: Array<ClassCreateWithoutMembersInput>;
    connectOrCreate?: Array<ClassCreateOrConnectWithoutMembersInput>;
    upsert?: Array<ClassUpsertWithWhereUniqueWithoutMembersInput>;
    set?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    update?: Array<ClassUpdateWithWhereUniqueWithoutMembersInput>;
    updateMany?: Array<ClassUpdateManyWithWhereWithoutMembersInput>;
    deleteMany?: Array<ClassScalarWhereInput>;
}
export declare class ClassUncheckedUpdateManyWithoutMembersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    gradeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    specifiedGrade?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ClassUncheckedUpdateManyWithoutSchoolNestedInput {
    create?: Array<ClassCreateWithoutSchoolInput>;
    connectOrCreate?: Array<ClassCreateOrConnectWithoutSchoolInput>;
    upsert?: Array<ClassUpsertWithWhereUniqueWithoutSchoolInput>;
    createMany?: InstanceType<typeof ClassCreateManySchoolInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    update?: Array<ClassUpdateWithWhereUniqueWithoutSchoolInput>;
    updateMany?: Array<ClassUpdateManyWithWhereWithoutSchoolInput>;
    deleteMany?: Array<ClassScalarWhereInput>;
}
export declare class ClassUncheckedUpdateManyWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    gradeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    specifiedGrade?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ClassUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    gradeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    specifiedGrade?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ClassUncheckedUpdateWithoutCoursesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    gradeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    specifiedGrade?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutClassesNestedInput>;
}
export declare class ClassUncheckedUpdateWithoutGradeInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    specifiedGrade?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutClassesNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutClassesNestedInput>;
}
export declare class ClassUncheckedUpdateWithoutMembersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    gradeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    specifiedGrade?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutClassesNestedInput>;
}
export declare class ClassUncheckedUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    gradeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    specifiedGrade?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutClassesNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutClassesNestedInput>;
}
export declare class ClassUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    gradeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    specifiedGrade?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutClassesNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutClassesNestedInput>;
}
export declare class ClassUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    specifiedGrade?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class ClassUpdateManyWithWhereWithoutCoursesInput {
    where: InstanceType<typeof ClassScalarWhereInput>;
    data: InstanceType<typeof ClassUpdateManyMutationInput>;
}
export declare class ClassUpdateManyWithWhereWithoutGradeInput {
    where: InstanceType<typeof ClassScalarWhereInput>;
    data: InstanceType<typeof ClassUpdateManyMutationInput>;
}
export declare class ClassUpdateManyWithWhereWithoutMembersInput {
    where: InstanceType<typeof ClassScalarWhereInput>;
    data: InstanceType<typeof ClassUpdateManyMutationInput>;
}
export declare class ClassUpdateManyWithWhereWithoutSchoolInput {
    where: InstanceType<typeof ClassScalarWhereInput>;
    data: InstanceType<typeof ClassUpdateManyMutationInput>;
}
export declare class ClassUpdateManyWithoutCoursesNestedInput {
    create?: Array<ClassCreateWithoutCoursesInput>;
    connectOrCreate?: Array<ClassCreateOrConnectWithoutCoursesInput>;
    upsert?: Array<ClassUpsertWithWhereUniqueWithoutCoursesInput>;
    set?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    update?: Array<ClassUpdateWithWhereUniqueWithoutCoursesInput>;
    updateMany?: Array<ClassUpdateManyWithWhereWithoutCoursesInput>;
    deleteMany?: Array<ClassScalarWhereInput>;
}
export declare class ClassUpdateManyWithoutGradeNestedInput {
    create?: Array<ClassCreateWithoutGradeInput>;
    connectOrCreate?: Array<ClassCreateOrConnectWithoutGradeInput>;
    upsert?: Array<ClassUpsertWithWhereUniqueWithoutGradeInput>;
    createMany?: InstanceType<typeof ClassCreateManyGradeInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    update?: Array<ClassUpdateWithWhereUniqueWithoutGradeInput>;
    updateMany?: Array<ClassUpdateManyWithWhereWithoutGradeInput>;
    deleteMany?: Array<ClassScalarWhereInput>;
}
export declare class ClassUpdateManyWithoutMembersNestedInput {
    create?: Array<ClassCreateWithoutMembersInput>;
    connectOrCreate?: Array<ClassCreateOrConnectWithoutMembersInput>;
    upsert?: Array<ClassUpsertWithWhereUniqueWithoutMembersInput>;
    set?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    update?: Array<ClassUpdateWithWhereUniqueWithoutMembersInput>;
    updateMany?: Array<ClassUpdateManyWithWhereWithoutMembersInput>;
    deleteMany?: Array<ClassScalarWhereInput>;
}
export declare class ClassUpdateManyWithoutSchoolNestedInput {
    create?: Array<ClassCreateWithoutSchoolInput>;
    connectOrCreate?: Array<ClassCreateOrConnectWithoutSchoolInput>;
    upsert?: Array<ClassUpsertWithWhereUniqueWithoutSchoolInput>;
    createMany?: InstanceType<typeof ClassCreateManySchoolInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClassWhereUniqueInput, 'id'>>;
    update?: Array<ClassUpdateWithWhereUniqueWithoutSchoolInput>;
    updateMany?: Array<ClassUpdateManyWithWhereWithoutSchoolInput>;
    deleteMany?: Array<ClassScalarWhereInput>;
}
export declare class ClassUpdateWithWhereUniqueWithoutCoursesInput {
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ClassUpdateWithoutCoursesInput>;
}
export declare class ClassUpdateWithWhereUniqueWithoutGradeInput {
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ClassUpdateWithoutGradeInput>;
}
export declare class ClassUpdateWithWhereUniqueWithoutMembersInput {
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ClassUpdateWithoutMembersInput>;
}
export declare class ClassUpdateWithWhereUniqueWithoutSchoolInput {
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ClassUpdateWithoutSchoolInput>;
}
export declare class ClassUpdateWithoutCoursesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    specifiedGrade?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    grade?: InstanceType<typeof GradeUpdateOneRequiredWithoutClassesNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutClassesNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutClassesNestedInput>;
}
export declare class ClassUpdateWithoutGradeInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    specifiedGrade?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutClassesNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutClassesNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutClassesNestedInput>;
}
export declare class ClassUpdateWithoutMembersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    specifiedGrade?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutClassesNestedInput>;
    grade?: InstanceType<typeof GradeUpdateOneRequiredWithoutClassesNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutClassesNestedInput>;
}
export declare class ClassUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    specifiedGrade?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutClassesNestedInput>;
    grade?: InstanceType<typeof GradeUpdateOneRequiredWithoutClassesNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutClassesNestedInput>;
}
export declare class ClassUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    specifiedGrade?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutClassesNestedInput>;
    grade?: InstanceType<typeof GradeUpdateOneRequiredWithoutClassesNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutClassesNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutClassesNestedInput>;
}
export declare class ClassUpsertWithWhereUniqueWithoutCoursesInput {
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ClassUpdateWithoutCoursesInput>;
    create: InstanceType<typeof ClassCreateWithoutCoursesInput>;
}
export declare class ClassUpsertWithWhereUniqueWithoutGradeInput {
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ClassUpdateWithoutGradeInput>;
    create: InstanceType<typeof ClassCreateWithoutGradeInput>;
}
export declare class ClassUpsertWithWhereUniqueWithoutMembersInput {
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ClassUpdateWithoutMembersInput>;
    create: InstanceType<typeof ClassCreateWithoutMembersInput>;
}
export declare class ClassUpsertWithWhereUniqueWithoutSchoolInput {
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ClassUpdateWithoutSchoolInput>;
    create: InstanceType<typeof ClassCreateWithoutSchoolInput>;
}
export declare class ClassWhereUniqueInput {
    id?: string;
    AND?: Array<ClassWhereInput>;
    OR?: Array<ClassWhereInput>;
    NOT?: Array<ClassWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    gradeId?: InstanceType<typeof UuidFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
    specifiedGrade?: InstanceType<typeof StringNullableFilter>;
    courses?: InstanceType<typeof CourseListRelationFilter>;
    grade?: InstanceType<typeof GradeRelationFilter>;
    members?: InstanceType<typeof UserListRelationFilter>;
    school?: InstanceType<typeof SchoolRelationFilter>;
}
export declare class ClassWhereInput {
    AND?: Array<ClassWhereInput>;
    OR?: Array<ClassWhereInput>;
    NOT?: Array<ClassWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    gradeId?: InstanceType<typeof UuidFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
    specifiedGrade?: InstanceType<typeof StringNullableFilter>;
    courses?: InstanceType<typeof CourseListRelationFilter>;
    grade?: InstanceType<typeof GradeRelationFilter>;
    members?: InstanceType<typeof UserListRelationFilter>;
    school?: InstanceType<typeof SchoolRelationFilter>;
}
export declare class Class {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    gradeId: string;
    schoolId: string;
    specifiedGrade: string | null;
    courses?: Array<Course>;
    grade?: InstanceType<typeof Grade>;
    members?: Array<User>;
    school?: InstanceType<typeof School>;
    _count?: InstanceType<typeof ClassCount>;
}
export declare class CreateManyClassArgs {
    data: Array<ClassCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneClassArgs {
    data: InstanceType<typeof ClassCreateInput>;
}
export declare class DeleteManyClassArgs {
    where?: InstanceType<typeof ClassWhereInput>;
}
export declare class DeleteOneClassArgs {
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
}
export declare class FindFirstClassOrThrowArgs {
    where?: InstanceType<typeof ClassWhereInput>;
    orderBy?: Array<ClassOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClassScalarFieldEnum>;
}
export declare class FindFirstClassArgs {
    where?: InstanceType<typeof ClassWhereInput>;
    orderBy?: Array<ClassOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClassScalarFieldEnum>;
}
export declare class FindManyClassArgs {
    where?: InstanceType<typeof ClassWhereInput>;
    orderBy?: Array<ClassOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClassScalarFieldEnum>;
}
export declare class FindUniqueClassOrThrowArgs {
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
}
export declare class FindUniqueClassArgs {
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
}
export declare class UpdateManyClassArgs {
    data: InstanceType<typeof ClassUpdateManyMutationInput>;
    where?: InstanceType<typeof ClassWhereInput>;
}
export declare class UpdateOneClassArgs {
    data: InstanceType<typeof ClassUpdateInput>;
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
}
export declare class UpsertOneClassArgs {
    where: Prisma.AtLeast<ClassWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClassCreateInput>;
    update: InstanceType<typeof ClassUpdateInput>;
}
export declare class AggregateClub {
    _count?: InstanceType<typeof ClubCountAggregate>;
    _min?: InstanceType<typeof ClubMinAggregate>;
    _max?: InstanceType<typeof ClubMaxAggregate>;
}
export declare class ClubAggregateArgs {
    where?: InstanceType<typeof ClubWhereInput>;
    orderBy?: Array<ClubOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClubCountAggregateInput>;
    _min?: InstanceType<typeof ClubMinAggregateInput>;
    _max?: InstanceType<typeof ClubMaxAggregateInput>;
}
export declare class ClubCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    chatId?: true;
    coverImage?: true;
    description?: true;
    location?: true;
    meetingDay?: true;
    meetingTime?: true;
    name?: true;
    requirements?: true;
    schoolId?: true;
    _all?: true;
}
export declare class ClubCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    chatId: number;
    coverImage: number;
    description: number;
    location: number;
    meetingDay: number;
    meetingTime: number;
    name: number;
    requirements: number;
    schoolId: number;
    _all: number;
}
export declare class ClubCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: keyof typeof SortOrder;
    coverImage?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    location?: keyof typeof SortOrder;
    meetingDay?: keyof typeof SortOrder;
    meetingTime?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    requirements?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
}
export declare class ClubCount {
    events?: number;
    leaders?: number;
    members?: number;
    tags?: number;
}
export declare class ClubCreateManyChatInputEnvelope {
    data: Array<ClubCreateManyChatInput>;
    skipDuplicates?: boolean;
}
export declare class ClubCreateManyChatInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
    schoolId: string;
}
export declare class ClubCreateManySchoolInputEnvelope {
    data: Array<ClubCreateManySchoolInput>;
    skipDuplicates?: boolean;
}
export declare class ClubCreateManySchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
}
export declare class ClubCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
    schoolId: string;
}
export declare class ClubCreateNestedManyWithoutChatInput {
    create?: Array<ClubCreateWithoutChatInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutChatInput>;
    createMany?: InstanceType<typeof ClubCreateManyChatInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
}
export declare class ClubCreateNestedManyWithoutEventsInput {
    create?: Array<ClubCreateWithoutEventsInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutEventsInput>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
}
export declare class ClubCreateNestedManyWithoutLeadersInput {
    create?: Array<ClubCreateWithoutLeadersInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutLeadersInput>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
}
export declare class ClubCreateNestedManyWithoutMembersInput {
    create?: Array<ClubCreateWithoutMembersInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutMembersInput>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
}
export declare class ClubCreateNestedManyWithoutSchoolInput {
    create?: Array<ClubCreateWithoutSchoolInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutSchoolInput>;
    createMany?: InstanceType<typeof ClubCreateManySchoolInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
}
export declare class ClubCreateNestedManyWithoutTagsInput {
    create?: Array<ClubCreateWithoutTagsInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutTagsInput>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
}
export declare class ClubCreateOrConnectWithoutChatInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClubCreateWithoutChatInput>;
}
export declare class ClubCreateOrConnectWithoutEventsInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClubCreateWithoutEventsInput>;
}
export declare class ClubCreateOrConnectWithoutLeadersInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClubCreateWithoutLeadersInput>;
}
export declare class ClubCreateOrConnectWithoutMembersInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClubCreateWithoutMembersInput>;
}
export declare class ClubCreateOrConnectWithoutSchoolInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClubCreateWithoutSchoolInput>;
}
export declare class ClubCreateOrConnectWithoutTagsInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClubCreateWithoutTagsInput>;
}
export declare class ClubCreateWithoutChatInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutClubsInput>;
    leaders?: InstanceType<typeof UserCreateNestedManyWithoutClubsAsLeaderInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutClubsInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutClubsInput>;
    tags?: InstanceType<typeof ClubTagCreateNestedManyWithoutClubsInput>;
}
export declare class ClubCreateWithoutEventsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
    chat?: InstanceType<typeof ChatCreateNestedOneWithoutClubsInput>;
    leaders?: InstanceType<typeof UserCreateNestedManyWithoutClubsAsLeaderInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutClubsInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutClubsInput>;
    tags?: InstanceType<typeof ClubTagCreateNestedManyWithoutClubsInput>;
}
export declare class ClubCreateWithoutLeadersInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
    chat?: InstanceType<typeof ChatCreateNestedOneWithoutClubsInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutClubsInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutClubsInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutClubsInput>;
    tags?: InstanceType<typeof ClubTagCreateNestedManyWithoutClubsInput>;
}
export declare class ClubCreateWithoutMembersInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
    chat?: InstanceType<typeof ChatCreateNestedOneWithoutClubsInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutClubsInput>;
    leaders?: InstanceType<typeof UserCreateNestedManyWithoutClubsAsLeaderInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutClubsInput>;
    tags?: InstanceType<typeof ClubTagCreateNestedManyWithoutClubsInput>;
}
export declare class ClubCreateWithoutSchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
    chat?: InstanceType<typeof ChatCreateNestedOneWithoutClubsInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutClubsInput>;
    leaders?: InstanceType<typeof UserCreateNestedManyWithoutClubsAsLeaderInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutClubsInput>;
    tags?: InstanceType<typeof ClubTagCreateNestedManyWithoutClubsInput>;
}
export declare class ClubCreateWithoutTagsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
    chat?: InstanceType<typeof ChatCreateNestedOneWithoutClubsInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutClubsInput>;
    leaders?: InstanceType<typeof UserCreateNestedManyWithoutClubsAsLeaderInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutClubsInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutClubsInput>;
}
export declare class ClubCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
    chat?: InstanceType<typeof ChatCreateNestedOneWithoutClubsInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutClubsInput>;
    leaders?: InstanceType<typeof UserCreateNestedManyWithoutClubsAsLeaderInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutClubsInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutClubsInput>;
    tags?: InstanceType<typeof ClubTagCreateNestedManyWithoutClubsInput>;
}
export declare class ClubCreaterequirementsInput {
    set: Array<any>;
}
export declare class ClubGroupByArgs {
    where?: InstanceType<typeof ClubWhereInput>;
    orderBy?: Array<ClubOrderByWithAggregationInput>;
    by: Array<keyof typeof ClubScalarFieldEnum>;
    having?: InstanceType<typeof ClubScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClubCountAggregateInput>;
    _min?: InstanceType<typeof ClubMinAggregateInput>;
    _max?: InstanceType<typeof ClubMaxAggregateInput>;
}
export declare class ClubGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    chatId?: string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: Array<any>;
    schoolId: string;
    _count?: InstanceType<typeof ClubCountAggregate>;
    _min?: InstanceType<typeof ClubMinAggregate>;
    _max?: InstanceType<typeof ClubMaxAggregate>;
}
export declare class ClubListRelationFilter {
    every?: InstanceType<typeof ClubWhereInput>;
    some?: InstanceType<typeof ClubWhereInput>;
    none?: InstanceType<typeof ClubWhereInput>;
}
export declare class ClubMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    chatId?: true;
    coverImage?: true;
    description?: true;
    location?: true;
    meetingDay?: true;
    meetingTime?: true;
    name?: true;
    schoolId?: true;
}
export declare class ClubMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name?: string;
    schoolId?: string;
}
export declare class ClubMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: keyof typeof SortOrder;
    coverImage?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    location?: keyof typeof SortOrder;
    meetingDay?: keyof typeof SortOrder;
    meetingTime?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
}
export declare class ClubMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    chatId?: true;
    coverImage?: true;
    description?: true;
    location?: true;
    meetingDay?: true;
    meetingTime?: true;
    name?: true;
    schoolId?: true;
}
export declare class ClubMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name?: string;
    schoolId?: string;
}
export declare class ClubMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: keyof typeof SortOrder;
    coverImage?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    location?: keyof typeof SortOrder;
    meetingDay?: keyof typeof SortOrder;
    meetingTime?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
}
export declare class ClubOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ClubOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: InstanceType<typeof SortOrderInput>;
    coverImage?: InstanceType<typeof SortOrderInput>;
    description?: InstanceType<typeof SortOrderInput>;
    location?: InstanceType<typeof SortOrderInput>;
    meetingDay?: InstanceType<typeof SortOrderInput>;
    meetingTime?: InstanceType<typeof SortOrderInput>;
    name?: keyof typeof SortOrder;
    requirements?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ClubCountOrderByAggregateInput>;
    _max?: InstanceType<typeof ClubMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ClubMinOrderByAggregateInput>;
}
export declare class ClubOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: InstanceType<typeof SortOrderInput>;
    coverImage?: InstanceType<typeof SortOrderInput>;
    description?: InstanceType<typeof SortOrderInput>;
    location?: InstanceType<typeof SortOrderInput>;
    meetingDay?: InstanceType<typeof SortOrderInput>;
    meetingTime?: InstanceType<typeof SortOrderInput>;
    name?: keyof typeof SortOrder;
    requirements?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    chat?: InstanceType<typeof ChatOrderByWithRelationInput>;
    events?: InstanceType<typeof EventOrderByRelationAggregateInput>;
    leaders?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    members?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    school?: InstanceType<typeof SchoolOrderByWithRelationInput>;
    tags?: InstanceType<typeof ClubTagOrderByRelationAggregateInput>;
}
export declare class ClubScalarWhereWithAggregatesInput {
    AND?: Array<ClubScalarWhereWithAggregatesInput>;
    OR?: Array<ClubScalarWhereWithAggregatesInput>;
    NOT?: Array<ClubScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    chatId?: InstanceType<typeof UuidNullableWithAggregatesFilter>;
    coverImage?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    location?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    meetingDay?: InstanceType<typeof EnumDayNullableWithAggregatesFilter>;
    meetingTime?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    requirements?: InstanceType<typeof JsonNullableListFilter>;
    schoolId?: InstanceType<typeof UuidWithAggregatesFilter>;
}
export declare class ClubScalarWhereInput {
    AND?: Array<ClubScalarWhereInput>;
    OR?: Array<ClubScalarWhereInput>;
    NOT?: Array<ClubScalarWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    chatId?: InstanceType<typeof UuidNullableFilter>;
    coverImage?: InstanceType<typeof StringNullableFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    location?: InstanceType<typeof StringNullableFilter>;
    meetingDay?: InstanceType<typeof EnumDayNullableFilter>;
    meetingTime?: InstanceType<typeof StringNullableFilter>;
    name?: InstanceType<typeof StringFilter>;
    requirements?: InstanceType<typeof JsonNullableListFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
}
export declare class ClubUncheckedCreateNestedManyWithoutChatInput {
    create?: Array<ClubCreateWithoutChatInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutChatInput>;
    createMany?: InstanceType<typeof ClubCreateManyChatInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
}
export declare class ClubUncheckedCreateNestedManyWithoutEventsInput {
    create?: Array<ClubCreateWithoutEventsInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutEventsInput>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
}
export declare class ClubUncheckedCreateNestedManyWithoutLeadersInput {
    create?: Array<ClubCreateWithoutLeadersInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutLeadersInput>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
}
export declare class ClubUncheckedCreateNestedManyWithoutMembersInput {
    create?: Array<ClubCreateWithoutMembersInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutMembersInput>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
}
export declare class ClubUncheckedCreateNestedManyWithoutSchoolInput {
    create?: Array<ClubCreateWithoutSchoolInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutSchoolInput>;
    createMany?: InstanceType<typeof ClubCreateManySchoolInputEnvelope>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
}
export declare class ClubUncheckedCreateNestedManyWithoutTagsInput {
    create?: Array<ClubCreateWithoutTagsInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutTagsInput>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
}
export declare class ClubUncheckedCreateWithoutChatInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
    schoolId: string;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutClubsInput>;
    leaders?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClubsAsLeaderInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClubsInput>;
    tags?: InstanceType<typeof ClubTagUncheckedCreateNestedManyWithoutClubsInput>;
}
export declare class ClubUncheckedCreateWithoutEventsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
    schoolId: string;
    leaders?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClubsAsLeaderInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClubsInput>;
    tags?: InstanceType<typeof ClubTagUncheckedCreateNestedManyWithoutClubsInput>;
}
export declare class ClubUncheckedCreateWithoutLeadersInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
    schoolId: string;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutClubsInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClubsInput>;
    tags?: InstanceType<typeof ClubTagUncheckedCreateNestedManyWithoutClubsInput>;
}
export declare class ClubUncheckedCreateWithoutMembersInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
    schoolId: string;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutClubsInput>;
    leaders?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClubsAsLeaderInput>;
    tags?: InstanceType<typeof ClubTagUncheckedCreateNestedManyWithoutClubsInput>;
}
export declare class ClubUncheckedCreateWithoutSchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutClubsInput>;
    leaders?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClubsAsLeaderInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClubsInput>;
    tags?: InstanceType<typeof ClubTagUncheckedCreateNestedManyWithoutClubsInput>;
}
export declare class ClubUncheckedCreateWithoutTagsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
    schoolId: string;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutClubsInput>;
    leaders?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClubsAsLeaderInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClubsInput>;
}
export declare class ClubUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    coverImage?: string;
    description?: string;
    location?: string;
    meetingDay?: keyof typeof Day;
    meetingTime?: string;
    name: string;
    requirements?: InstanceType<typeof ClubCreaterequirementsInput>;
    schoolId: string;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutClubsInput>;
    leaders?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClubsAsLeaderInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutClubsInput>;
    tags?: InstanceType<typeof ClubTagUncheckedCreateNestedManyWithoutClubsInput>;
}
export declare class ClubUncheckedUpdateManyWithoutChatNestedInput {
    create?: Array<ClubCreateWithoutChatInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutChatInput>;
    upsert?: Array<ClubUpsertWithWhereUniqueWithoutChatInput>;
    createMany?: InstanceType<typeof ClubCreateManyChatInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    update?: Array<ClubUpdateWithWhereUniqueWithoutChatInput>;
    updateMany?: Array<ClubUpdateManyWithWhereWithoutChatInput>;
    deleteMany?: Array<ClubScalarWhereInput>;
}
export declare class ClubUncheckedUpdateManyWithoutChatInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ClubUncheckedUpdateManyWithoutEventsNestedInput {
    create?: Array<ClubCreateWithoutEventsInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutEventsInput>;
    upsert?: Array<ClubUpsertWithWhereUniqueWithoutEventsInput>;
    set?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    update?: Array<ClubUpdateWithWhereUniqueWithoutEventsInput>;
    updateMany?: Array<ClubUpdateManyWithWhereWithoutEventsInput>;
    deleteMany?: Array<ClubScalarWhereInput>;
}
export declare class ClubUncheckedUpdateManyWithoutEventsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ClubUncheckedUpdateManyWithoutLeadersNestedInput {
    create?: Array<ClubCreateWithoutLeadersInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutLeadersInput>;
    upsert?: Array<ClubUpsertWithWhereUniqueWithoutLeadersInput>;
    set?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    update?: Array<ClubUpdateWithWhereUniqueWithoutLeadersInput>;
    updateMany?: Array<ClubUpdateManyWithWhereWithoutLeadersInput>;
    deleteMany?: Array<ClubScalarWhereInput>;
}
export declare class ClubUncheckedUpdateManyWithoutLeadersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ClubUncheckedUpdateManyWithoutMembersNestedInput {
    create?: Array<ClubCreateWithoutMembersInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutMembersInput>;
    upsert?: Array<ClubUpsertWithWhereUniqueWithoutMembersInput>;
    set?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    update?: Array<ClubUpdateWithWhereUniqueWithoutMembersInput>;
    updateMany?: Array<ClubUpdateManyWithWhereWithoutMembersInput>;
    deleteMany?: Array<ClubScalarWhereInput>;
}
export declare class ClubUncheckedUpdateManyWithoutMembersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ClubUncheckedUpdateManyWithoutSchoolNestedInput {
    create?: Array<ClubCreateWithoutSchoolInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutSchoolInput>;
    upsert?: Array<ClubUpsertWithWhereUniqueWithoutSchoolInput>;
    createMany?: InstanceType<typeof ClubCreateManySchoolInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    update?: Array<ClubUpdateWithWhereUniqueWithoutSchoolInput>;
    updateMany?: Array<ClubUpdateManyWithWhereWithoutSchoolInput>;
    deleteMany?: Array<ClubScalarWhereInput>;
}
export declare class ClubUncheckedUpdateManyWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
}
export declare class ClubUncheckedUpdateManyWithoutTagsNestedInput {
    create?: Array<ClubCreateWithoutTagsInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutTagsInput>;
    upsert?: Array<ClubUpsertWithWhereUniqueWithoutTagsInput>;
    set?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    update?: Array<ClubUpdateWithWhereUniqueWithoutTagsInput>;
    updateMany?: Array<ClubUpdateManyWithWhereWithoutTagsInput>;
    deleteMany?: Array<ClubScalarWhereInput>;
}
export declare class ClubUncheckedUpdateManyWithoutTagsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ClubUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ClubUncheckedUpdateWithoutChatInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutClubsNestedInput>;
    leaders?: InstanceType<typeof UserUncheckedUpdateManyWithoutClubsAsLeaderNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutClubsNestedInput>;
    tags?: InstanceType<typeof ClubTagUncheckedUpdateManyWithoutClubsNestedInput>;
}
export declare class ClubUncheckedUpdateWithoutEventsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    leaders?: InstanceType<typeof UserUncheckedUpdateManyWithoutClubsAsLeaderNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutClubsNestedInput>;
    tags?: InstanceType<typeof ClubTagUncheckedUpdateManyWithoutClubsNestedInput>;
}
export declare class ClubUncheckedUpdateWithoutLeadersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutClubsNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutClubsNestedInput>;
    tags?: InstanceType<typeof ClubTagUncheckedUpdateManyWithoutClubsNestedInput>;
}
export declare class ClubUncheckedUpdateWithoutMembersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutClubsNestedInput>;
    leaders?: InstanceType<typeof UserUncheckedUpdateManyWithoutClubsAsLeaderNestedInput>;
    tags?: InstanceType<typeof ClubTagUncheckedUpdateManyWithoutClubsNestedInput>;
}
export declare class ClubUncheckedUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutClubsNestedInput>;
    leaders?: InstanceType<typeof UserUncheckedUpdateManyWithoutClubsAsLeaderNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutClubsNestedInput>;
    tags?: InstanceType<typeof ClubTagUncheckedUpdateManyWithoutClubsNestedInput>;
}
export declare class ClubUncheckedUpdateWithoutTagsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutClubsNestedInput>;
    leaders?: InstanceType<typeof UserUncheckedUpdateManyWithoutClubsAsLeaderNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutClubsNestedInput>;
}
export declare class ClubUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutClubsNestedInput>;
    leaders?: InstanceType<typeof UserUncheckedUpdateManyWithoutClubsAsLeaderNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutClubsNestedInput>;
    tags?: InstanceType<typeof ClubTagUncheckedUpdateManyWithoutClubsNestedInput>;
}
export declare class ClubUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
}
export declare class ClubUpdateManyWithWhereWithoutChatInput {
    where: InstanceType<typeof ClubScalarWhereInput>;
    data: InstanceType<typeof ClubUpdateManyMutationInput>;
}
export declare class ClubUpdateManyWithWhereWithoutEventsInput {
    where: InstanceType<typeof ClubScalarWhereInput>;
    data: InstanceType<typeof ClubUpdateManyMutationInput>;
}
export declare class ClubUpdateManyWithWhereWithoutLeadersInput {
    where: InstanceType<typeof ClubScalarWhereInput>;
    data: InstanceType<typeof ClubUpdateManyMutationInput>;
}
export declare class ClubUpdateManyWithWhereWithoutMembersInput {
    where: InstanceType<typeof ClubScalarWhereInput>;
    data: InstanceType<typeof ClubUpdateManyMutationInput>;
}
export declare class ClubUpdateManyWithWhereWithoutSchoolInput {
    where: InstanceType<typeof ClubScalarWhereInput>;
    data: InstanceType<typeof ClubUpdateManyMutationInput>;
}
export declare class ClubUpdateManyWithWhereWithoutTagsInput {
    where: InstanceType<typeof ClubScalarWhereInput>;
    data: InstanceType<typeof ClubUpdateManyMutationInput>;
}
export declare class ClubUpdateManyWithoutChatNestedInput {
    create?: Array<ClubCreateWithoutChatInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutChatInput>;
    upsert?: Array<ClubUpsertWithWhereUniqueWithoutChatInput>;
    createMany?: InstanceType<typeof ClubCreateManyChatInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    update?: Array<ClubUpdateWithWhereUniqueWithoutChatInput>;
    updateMany?: Array<ClubUpdateManyWithWhereWithoutChatInput>;
    deleteMany?: Array<ClubScalarWhereInput>;
}
export declare class ClubUpdateManyWithoutEventsNestedInput {
    create?: Array<ClubCreateWithoutEventsInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutEventsInput>;
    upsert?: Array<ClubUpsertWithWhereUniqueWithoutEventsInput>;
    set?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    update?: Array<ClubUpdateWithWhereUniqueWithoutEventsInput>;
    updateMany?: Array<ClubUpdateManyWithWhereWithoutEventsInput>;
    deleteMany?: Array<ClubScalarWhereInput>;
}
export declare class ClubUpdateManyWithoutLeadersNestedInput {
    create?: Array<ClubCreateWithoutLeadersInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutLeadersInput>;
    upsert?: Array<ClubUpsertWithWhereUniqueWithoutLeadersInput>;
    set?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    update?: Array<ClubUpdateWithWhereUniqueWithoutLeadersInput>;
    updateMany?: Array<ClubUpdateManyWithWhereWithoutLeadersInput>;
    deleteMany?: Array<ClubScalarWhereInput>;
}
export declare class ClubUpdateManyWithoutMembersNestedInput {
    create?: Array<ClubCreateWithoutMembersInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutMembersInput>;
    upsert?: Array<ClubUpsertWithWhereUniqueWithoutMembersInput>;
    set?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    update?: Array<ClubUpdateWithWhereUniqueWithoutMembersInput>;
    updateMany?: Array<ClubUpdateManyWithWhereWithoutMembersInput>;
    deleteMany?: Array<ClubScalarWhereInput>;
}
export declare class ClubUpdateManyWithoutSchoolNestedInput {
    create?: Array<ClubCreateWithoutSchoolInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutSchoolInput>;
    upsert?: Array<ClubUpsertWithWhereUniqueWithoutSchoolInput>;
    createMany?: InstanceType<typeof ClubCreateManySchoolInputEnvelope>;
    set?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    update?: Array<ClubUpdateWithWhereUniqueWithoutSchoolInput>;
    updateMany?: Array<ClubUpdateManyWithWhereWithoutSchoolInput>;
    deleteMany?: Array<ClubScalarWhereInput>;
}
export declare class ClubUpdateManyWithoutTagsNestedInput {
    create?: Array<ClubCreateWithoutTagsInput>;
    connectOrCreate?: Array<ClubCreateOrConnectWithoutTagsInput>;
    upsert?: Array<ClubUpsertWithWhereUniqueWithoutTagsInput>;
    set?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClubWhereUniqueInput, 'id'>>;
    update?: Array<ClubUpdateWithWhereUniqueWithoutTagsInput>;
    updateMany?: Array<ClubUpdateManyWithWhereWithoutTagsInput>;
    deleteMany?: Array<ClubScalarWhereInput>;
}
export declare class ClubUpdateWithWhereUniqueWithoutChatInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ClubUpdateWithoutChatInput>;
}
export declare class ClubUpdateWithWhereUniqueWithoutEventsInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ClubUpdateWithoutEventsInput>;
}
export declare class ClubUpdateWithWhereUniqueWithoutLeadersInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ClubUpdateWithoutLeadersInput>;
}
export declare class ClubUpdateWithWhereUniqueWithoutMembersInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ClubUpdateWithoutMembersInput>;
}
export declare class ClubUpdateWithWhereUniqueWithoutSchoolInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ClubUpdateWithoutSchoolInput>;
}
export declare class ClubUpdateWithWhereUniqueWithoutTagsInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ClubUpdateWithoutTagsInput>;
}
export declare class ClubUpdateWithoutChatInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutClubsNestedInput>;
    leaders?: InstanceType<typeof UserUpdateManyWithoutClubsAsLeaderNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutClubsNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutClubsNestedInput>;
    tags?: InstanceType<typeof ClubTagUpdateManyWithoutClubsNestedInput>;
}
export declare class ClubUpdateWithoutEventsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    chat?: InstanceType<typeof ChatUpdateOneWithoutClubsNestedInput>;
    leaders?: InstanceType<typeof UserUpdateManyWithoutClubsAsLeaderNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutClubsNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutClubsNestedInput>;
    tags?: InstanceType<typeof ClubTagUpdateManyWithoutClubsNestedInput>;
}
export declare class ClubUpdateWithoutLeadersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    chat?: InstanceType<typeof ChatUpdateOneWithoutClubsNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutClubsNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutClubsNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutClubsNestedInput>;
    tags?: InstanceType<typeof ClubTagUpdateManyWithoutClubsNestedInput>;
}
export declare class ClubUpdateWithoutMembersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    chat?: InstanceType<typeof ChatUpdateOneWithoutClubsNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutClubsNestedInput>;
    leaders?: InstanceType<typeof UserUpdateManyWithoutClubsAsLeaderNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutClubsNestedInput>;
    tags?: InstanceType<typeof ClubTagUpdateManyWithoutClubsNestedInput>;
}
export declare class ClubUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    chat?: InstanceType<typeof ChatUpdateOneWithoutClubsNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutClubsNestedInput>;
    leaders?: InstanceType<typeof UserUpdateManyWithoutClubsAsLeaderNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutClubsNestedInput>;
    tags?: InstanceType<typeof ClubTagUpdateManyWithoutClubsNestedInput>;
}
export declare class ClubUpdateWithoutTagsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    chat?: InstanceType<typeof ChatUpdateOneWithoutClubsNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutClubsNestedInput>;
    leaders?: InstanceType<typeof UserUpdateManyWithoutClubsAsLeaderNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutClubsNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutClubsNestedInput>;
}
export declare class ClubUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    coverImage?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    meetingDay?: InstanceType<typeof NullableEnumDayFieldUpdateOperationsInput>;
    meetingTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    requirements?: InstanceType<typeof ClubUpdaterequirementsInput>;
    chat?: InstanceType<typeof ChatUpdateOneWithoutClubsNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutClubsNestedInput>;
    leaders?: InstanceType<typeof UserUpdateManyWithoutClubsAsLeaderNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutClubsNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutClubsNestedInput>;
    tags?: InstanceType<typeof ClubTagUpdateManyWithoutClubsNestedInput>;
}
export declare class ClubUpdaterequirementsInput {
    set?: Array<any>;
    push?: Array<any>;
}
export declare class ClubUpsertWithWhereUniqueWithoutChatInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ClubUpdateWithoutChatInput>;
    create: InstanceType<typeof ClubCreateWithoutChatInput>;
}
export declare class ClubUpsertWithWhereUniqueWithoutEventsInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ClubUpdateWithoutEventsInput>;
    create: InstanceType<typeof ClubCreateWithoutEventsInput>;
}
export declare class ClubUpsertWithWhereUniqueWithoutLeadersInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ClubUpdateWithoutLeadersInput>;
    create: InstanceType<typeof ClubCreateWithoutLeadersInput>;
}
export declare class ClubUpsertWithWhereUniqueWithoutMembersInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ClubUpdateWithoutMembersInput>;
    create: InstanceType<typeof ClubCreateWithoutMembersInput>;
}
export declare class ClubUpsertWithWhereUniqueWithoutSchoolInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ClubUpdateWithoutSchoolInput>;
    create: InstanceType<typeof ClubCreateWithoutSchoolInput>;
}
export declare class ClubUpsertWithWhereUniqueWithoutTagsInput {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ClubUpdateWithoutTagsInput>;
    create: InstanceType<typeof ClubCreateWithoutTagsInput>;
}
export declare class ClubWhereUniqueInput {
    id?: string;
    AND?: Array<ClubWhereInput>;
    OR?: Array<ClubWhereInput>;
    NOT?: Array<ClubWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    chatId?: InstanceType<typeof UuidNullableFilter>;
    coverImage?: InstanceType<typeof StringNullableFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    location?: InstanceType<typeof StringNullableFilter>;
    meetingDay?: InstanceType<typeof EnumDayNullableFilter>;
    meetingTime?: InstanceType<typeof StringNullableFilter>;
    name?: InstanceType<typeof StringFilter>;
    requirements?: InstanceType<typeof JsonNullableListFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
    chat?: InstanceType<typeof ChatNullableRelationFilter>;
    events?: InstanceType<typeof EventListRelationFilter>;
    leaders?: InstanceType<typeof UserListRelationFilter>;
    members?: InstanceType<typeof UserListRelationFilter>;
    school?: InstanceType<typeof SchoolRelationFilter>;
    tags?: InstanceType<typeof ClubTagListRelationFilter>;
}
export declare class ClubWhereInput {
    AND?: Array<ClubWhereInput>;
    OR?: Array<ClubWhereInput>;
    NOT?: Array<ClubWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    chatId?: InstanceType<typeof UuidNullableFilter>;
    coverImage?: InstanceType<typeof StringNullableFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    location?: InstanceType<typeof StringNullableFilter>;
    meetingDay?: InstanceType<typeof EnumDayNullableFilter>;
    meetingTime?: InstanceType<typeof StringNullableFilter>;
    name?: InstanceType<typeof StringFilter>;
    requirements?: InstanceType<typeof JsonNullableListFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
    chat?: InstanceType<typeof ChatNullableRelationFilter>;
    events?: InstanceType<typeof EventListRelationFilter>;
    leaders?: InstanceType<typeof UserListRelationFilter>;
    members?: InstanceType<typeof UserListRelationFilter>;
    school?: InstanceType<typeof SchoolRelationFilter>;
    tags?: InstanceType<typeof ClubTagListRelationFilter>;
}
export declare class Club {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    chatId: string | null;
    coverImage: string | null;
    description: string | null;
    location: string | null;
    meetingDay: keyof typeof Day | null;
    meetingTime: string | null;
    name: string;
    requirements: Array<any>;
    schoolId: string;
    chat?: InstanceType<typeof Chat> | null;
    events?: Array<Event>;
    leaders?: Array<User>;
    members?: Array<User>;
    school?: InstanceType<typeof School>;
    tags?: Array<ClubTag>;
    _count?: InstanceType<typeof ClubCount>;
}
export declare class CreateManyClubArgs {
    data: Array<ClubCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneClubArgs {
    data: InstanceType<typeof ClubCreateInput>;
}
export declare class DeleteManyClubArgs {
    where?: InstanceType<typeof ClubWhereInput>;
}
export declare class DeleteOneClubArgs {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
}
export declare class FindFirstClubOrThrowArgs {
    where?: InstanceType<typeof ClubWhereInput>;
    orderBy?: Array<ClubOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClubScalarFieldEnum>;
}
export declare class FindFirstClubArgs {
    where?: InstanceType<typeof ClubWhereInput>;
    orderBy?: Array<ClubOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClubScalarFieldEnum>;
}
export declare class FindManyClubArgs {
    where?: InstanceType<typeof ClubWhereInput>;
    orderBy?: Array<ClubOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClubScalarFieldEnum>;
}
export declare class FindUniqueClubOrThrowArgs {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
}
export declare class FindUniqueClubArgs {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
}
export declare class UpdateManyClubArgs {
    data: InstanceType<typeof ClubUpdateManyMutationInput>;
    where?: InstanceType<typeof ClubWhereInput>;
}
export declare class UpdateOneClubArgs {
    data: InstanceType<typeof ClubUpdateInput>;
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
}
export declare class UpsertOneClubArgs {
    where: Prisma.AtLeast<ClubWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClubCreateInput>;
    update: InstanceType<typeof ClubUpdateInput>;
}
export declare class AggregateClubTag {
    _count?: InstanceType<typeof ClubTagCountAggregate>;
    _min?: InstanceType<typeof ClubTagMinAggregate>;
    _max?: InstanceType<typeof ClubTagMaxAggregate>;
}
export declare class ClubTagAggregateArgs {
    where?: InstanceType<typeof ClubTagWhereInput>;
    orderBy?: Array<ClubTagOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClubTagCountAggregateInput>;
    _min?: InstanceType<typeof ClubTagMinAggregateInput>;
    _max?: InstanceType<typeof ClubTagMaxAggregateInput>;
}
export declare class ClubTagCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    name?: true;
    _all?: true;
}
export declare class ClubTagCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    name: number;
    _all: number;
}
export declare class ClubTagCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class ClubTagCount {
    clubs?: number;
}
export declare class ClubTagCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
}
export declare class ClubTagCreateNestedManyWithoutClubsInput {
    create?: Array<ClubTagCreateWithoutClubsInput>;
    connectOrCreate?: Array<ClubTagCreateOrConnectWithoutClubsInput>;
    connect?: Array<Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>>;
}
export declare class ClubTagCreateOrConnectWithoutClubsInput {
    where: Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClubTagCreateWithoutClubsInput>;
}
export declare class ClubTagCreateWithoutClubsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
}
export declare class ClubTagCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutTagsInput>;
}
export declare class ClubTagGroupByArgs {
    where?: InstanceType<typeof ClubTagWhereInput>;
    orderBy?: Array<ClubTagOrderByWithAggregationInput>;
    by: Array<keyof typeof ClubTagScalarFieldEnum>;
    having?: InstanceType<typeof ClubTagScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof ClubTagCountAggregateInput>;
    _min?: InstanceType<typeof ClubTagMinAggregateInput>;
    _max?: InstanceType<typeof ClubTagMaxAggregateInput>;
}
export declare class ClubTagGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    name: string;
    _count?: InstanceType<typeof ClubTagCountAggregate>;
    _min?: InstanceType<typeof ClubTagMinAggregate>;
    _max?: InstanceType<typeof ClubTagMaxAggregate>;
}
export declare class ClubTagListRelationFilter {
    every?: InstanceType<typeof ClubTagWhereInput>;
    some?: InstanceType<typeof ClubTagWhereInput>;
    none?: InstanceType<typeof ClubTagWhereInput>;
}
export declare class ClubTagMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    name?: true;
}
export declare class ClubTagMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name?: string;
}
export declare class ClubTagMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class ClubTagMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    name?: true;
}
export declare class ClubTagMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name?: string;
}
export declare class ClubTagMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
export declare class ClubTagOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class ClubTagOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    _count?: InstanceType<typeof ClubTagCountOrderByAggregateInput>;
    _max?: InstanceType<typeof ClubTagMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof ClubTagMinOrderByAggregateInput>;
}
export declare class ClubTagOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    clubs?: InstanceType<typeof ClubOrderByRelationAggregateInput>;
}
export declare class ClubTagScalarWhereWithAggregatesInput {
    AND?: Array<ClubTagScalarWhereWithAggregatesInput>;
    OR?: Array<ClubTagScalarWhereWithAggregatesInput>;
    NOT?: Array<ClubTagScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class ClubTagScalarWhereInput {
    AND?: Array<ClubTagScalarWhereInput>;
    OR?: Array<ClubTagScalarWhereInput>;
    NOT?: Array<ClubTagScalarWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    name?: InstanceType<typeof StringFilter>;
}
export declare class ClubTagUncheckedCreateNestedManyWithoutClubsInput {
    create?: Array<ClubTagCreateWithoutClubsInput>;
    connectOrCreate?: Array<ClubTagCreateOrConnectWithoutClubsInput>;
    connect?: Array<Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>>;
}
export declare class ClubTagUncheckedCreateWithoutClubsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
}
export declare class ClubTagUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutTagsInput>;
}
export declare class ClubTagUncheckedUpdateManyWithoutClubsNestedInput {
    create?: Array<ClubTagCreateWithoutClubsInput>;
    connectOrCreate?: Array<ClubTagCreateOrConnectWithoutClubsInput>;
    upsert?: Array<ClubTagUpsertWithWhereUniqueWithoutClubsInput>;
    set?: Array<Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>>;
    update?: Array<ClubTagUpdateWithWhereUniqueWithoutClubsInput>;
    updateMany?: Array<ClubTagUpdateManyWithWhereWithoutClubsInput>;
    deleteMany?: Array<ClubTagScalarWhereInput>;
}
export declare class ClubTagUncheckedUpdateManyWithoutClubsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ClubTagUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ClubTagUncheckedUpdateWithoutClubsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ClubTagUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutTagsNestedInput>;
}
export declare class ClubTagUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ClubTagUpdateManyWithWhereWithoutClubsInput {
    where: InstanceType<typeof ClubTagScalarWhereInput>;
    data: InstanceType<typeof ClubTagUpdateManyMutationInput>;
}
export declare class ClubTagUpdateManyWithoutClubsNestedInput {
    create?: Array<ClubTagCreateWithoutClubsInput>;
    connectOrCreate?: Array<ClubTagCreateOrConnectWithoutClubsInput>;
    upsert?: Array<ClubTagUpsertWithWhereUniqueWithoutClubsInput>;
    set?: Array<Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>>;
    update?: Array<ClubTagUpdateWithWhereUniqueWithoutClubsInput>;
    updateMany?: Array<ClubTagUpdateManyWithWhereWithoutClubsInput>;
    deleteMany?: Array<ClubTagScalarWhereInput>;
}
export declare class ClubTagUpdateWithWhereUniqueWithoutClubsInput {
    where: Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>;
    data: InstanceType<typeof ClubTagUpdateWithoutClubsInput>;
}
export declare class ClubTagUpdateWithoutClubsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class ClubTagUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutTagsNestedInput>;
}
export declare class ClubTagUpsertWithWhereUniqueWithoutClubsInput {
    where: Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>;
    update: InstanceType<typeof ClubTagUpdateWithoutClubsInput>;
    create: InstanceType<typeof ClubTagCreateWithoutClubsInput>;
}
export declare class ClubTagWhereUniqueInput {
    id?: string;
    AND?: Array<ClubTagWhereInput>;
    OR?: Array<ClubTagWhereInput>;
    NOT?: Array<ClubTagWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    name?: InstanceType<typeof StringFilter>;
    clubs?: InstanceType<typeof ClubListRelationFilter>;
}
export declare class ClubTagWhereInput {
    AND?: Array<ClubTagWhereInput>;
    OR?: Array<ClubTagWhereInput>;
    NOT?: Array<ClubTagWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    name?: InstanceType<typeof StringFilter>;
    clubs?: InstanceType<typeof ClubListRelationFilter>;
}
export declare class ClubTag {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    clubs?: Array<Club>;
    _count?: InstanceType<typeof ClubTagCount>;
}
export declare class CreateManyClubTagArgs {
    data: Array<ClubTagCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneClubTagArgs {
    data: InstanceType<typeof ClubTagCreateInput>;
}
export declare class DeleteManyClubTagArgs {
    where?: InstanceType<typeof ClubTagWhereInput>;
}
export declare class DeleteOneClubTagArgs {
    where: Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>;
}
export declare class FindFirstClubTagOrThrowArgs {
    where?: InstanceType<typeof ClubTagWhereInput>;
    orderBy?: Array<ClubTagOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClubTagScalarFieldEnum>;
}
export declare class FindFirstClubTagArgs {
    where?: InstanceType<typeof ClubTagWhereInput>;
    orderBy?: Array<ClubTagOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClubTagScalarFieldEnum>;
}
export declare class FindManyClubTagArgs {
    where?: InstanceType<typeof ClubTagWhereInput>;
    orderBy?: Array<ClubTagOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ClubTagScalarFieldEnum>;
}
export declare class FindUniqueClubTagOrThrowArgs {
    where: Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>;
}
export declare class FindUniqueClubTagArgs {
    where: Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>;
}
export declare class UpdateManyClubTagArgs {
    data: InstanceType<typeof ClubTagUpdateManyMutationInput>;
    where?: InstanceType<typeof ClubTagWhereInput>;
}
export declare class UpdateOneClubTagArgs {
    data: InstanceType<typeof ClubTagUpdateInput>;
    where: Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>;
}
export declare class UpsertOneClubTagArgs {
    where: Prisma.AtLeast<ClubTagWhereUniqueInput, 'id'>;
    create: InstanceType<typeof ClubTagCreateInput>;
    update: InstanceType<typeof ClubTagUpdateInput>;
}
export declare class AggregateCourse {
    _count?: InstanceType<typeof CourseCountAggregate>;
    _min?: InstanceType<typeof CourseMinAggregate>;
    _max?: InstanceType<typeof CourseMaxAggregate>;
}
export declare class CourseAggregateArgs {
    where?: InstanceType<typeof CourseWhereInput>;
    orderBy?: Array<CourseOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CourseCountAggregateInput>;
    _min?: InstanceType<typeof CourseMinAggregateInput>;
    _max?: InstanceType<typeof CourseMaxAggregateInput>;
}
export declare class CourseCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    chatId?: true;
    subjectId?: true;
    teacherId?: true;
    _all?: true;
}
export declare class CourseCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    chatId: number;
    subjectId: number;
    teacherId: number;
    _all: number;
}
export declare class CourseCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: keyof typeof SortOrder;
    subjectId?: keyof typeof SortOrder;
    teacherId?: keyof typeof SortOrder;
}
export declare class CourseCount {
    classes?: number;
    members?: number;
}
export declare class CourseCreateManyChatInputEnvelope {
    data: Array<CourseCreateManyChatInput>;
    skipDuplicates?: boolean;
}
export declare class CourseCreateManyChatInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subjectId: string;
    teacherId: string;
}
export declare class CourseCreateManySubjectInputEnvelope {
    data: Array<CourseCreateManySubjectInput>;
    skipDuplicates?: boolean;
}
export declare class CourseCreateManySubjectInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    teacherId: string;
}
export declare class CourseCreateManyTeacherInputEnvelope {
    data: Array<CourseCreateManyTeacherInput>;
    skipDuplicates?: boolean;
}
export declare class CourseCreateManyTeacherInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    subjectId: string;
}
export declare class CourseCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    subjectId: string;
    teacherId: string;
}
export declare class CourseCreateNestedManyWithoutChatInput {
    create?: Array<CourseCreateWithoutChatInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutChatInput>;
    createMany?: InstanceType<typeof CourseCreateManyChatInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
}
export declare class CourseCreateNestedManyWithoutClassesInput {
    create?: Array<CourseCreateWithoutClassesInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutClassesInput>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
}
export declare class CourseCreateNestedManyWithoutMembersInput {
    create?: Array<CourseCreateWithoutMembersInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutMembersInput>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
}
export declare class CourseCreateNestedManyWithoutSubjectInput {
    create?: Array<CourseCreateWithoutSubjectInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutSubjectInput>;
    createMany?: InstanceType<typeof CourseCreateManySubjectInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
}
export declare class CourseCreateNestedManyWithoutTeacherInput {
    create?: Array<CourseCreateWithoutTeacherInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutTeacherInput>;
    createMany?: InstanceType<typeof CourseCreateManyTeacherInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
}
export declare class CourseCreateOrConnectWithoutChatInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CourseCreateWithoutChatInput>;
}
export declare class CourseCreateOrConnectWithoutClassesInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CourseCreateWithoutClassesInput>;
}
export declare class CourseCreateOrConnectWithoutMembersInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CourseCreateWithoutMembersInput>;
}
export declare class CourseCreateOrConnectWithoutSubjectInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CourseCreateWithoutSubjectInput>;
}
export declare class CourseCreateOrConnectWithoutTeacherInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CourseCreateWithoutTeacherInput>;
}
export declare class CourseCreateWithoutChatInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutCoursesInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutCoursesInput>;
    subject: InstanceType<typeof SubjectCreateNestedOneWithoutCoursesInput>;
    teacher: InstanceType<typeof UserCreateNestedOneWithoutCoursesAsTeacherInput>;
}
export declare class CourseCreateWithoutClassesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chat?: InstanceType<typeof ChatCreateNestedOneWithoutCoursesInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutCoursesInput>;
    subject: InstanceType<typeof SubjectCreateNestedOneWithoutCoursesInput>;
    teacher: InstanceType<typeof UserCreateNestedOneWithoutCoursesAsTeacherInput>;
}
export declare class CourseCreateWithoutMembersInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chat?: InstanceType<typeof ChatCreateNestedOneWithoutCoursesInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutCoursesInput>;
    subject: InstanceType<typeof SubjectCreateNestedOneWithoutCoursesInput>;
    teacher: InstanceType<typeof UserCreateNestedOneWithoutCoursesAsTeacherInput>;
}
export declare class CourseCreateWithoutSubjectInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chat?: InstanceType<typeof ChatCreateNestedOneWithoutCoursesInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutCoursesInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutCoursesInput>;
    teacher: InstanceType<typeof UserCreateNestedOneWithoutCoursesAsTeacherInput>;
}
export declare class CourseCreateWithoutTeacherInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chat?: InstanceType<typeof ChatCreateNestedOneWithoutCoursesInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutCoursesInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutCoursesInput>;
    subject: InstanceType<typeof SubjectCreateNestedOneWithoutCoursesInput>;
}
export declare class CourseCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chat?: InstanceType<typeof ChatCreateNestedOneWithoutCoursesInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutCoursesInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutCoursesInput>;
    subject: InstanceType<typeof SubjectCreateNestedOneWithoutCoursesInput>;
    teacher: InstanceType<typeof UserCreateNestedOneWithoutCoursesAsTeacherInput>;
}
export declare class CourseGroupByArgs {
    where?: InstanceType<typeof CourseWhereInput>;
    orderBy?: Array<CourseOrderByWithAggregationInput>;
    by: Array<keyof typeof CourseScalarFieldEnum>;
    having?: InstanceType<typeof CourseScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CourseCountAggregateInput>;
    _min?: InstanceType<typeof CourseMinAggregateInput>;
    _max?: InstanceType<typeof CourseMaxAggregateInput>;
}
export declare class CourseGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    chatId?: string;
    subjectId: string;
    teacherId: string;
    _count?: InstanceType<typeof CourseCountAggregate>;
    _min?: InstanceType<typeof CourseMinAggregate>;
    _max?: InstanceType<typeof CourseMaxAggregate>;
}
export declare class CourseListRelationFilter {
    every?: InstanceType<typeof CourseWhereInput>;
    some?: InstanceType<typeof CourseWhereInput>;
    none?: InstanceType<typeof CourseWhereInput>;
}
export declare class CourseMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    chatId?: true;
    subjectId?: true;
    teacherId?: true;
}
export declare class CourseMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    subjectId?: string;
    teacherId?: string;
}
export declare class CourseMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: keyof typeof SortOrder;
    subjectId?: keyof typeof SortOrder;
    teacherId?: keyof typeof SortOrder;
}
export declare class CourseMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    chatId?: true;
    subjectId?: true;
    teacherId?: true;
}
export declare class CourseMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    subjectId?: string;
    teacherId?: string;
}
export declare class CourseMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: keyof typeof SortOrder;
    subjectId?: keyof typeof SortOrder;
    teacherId?: keyof typeof SortOrder;
}
export declare class CourseOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class CourseOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: InstanceType<typeof SortOrderInput>;
    subjectId?: keyof typeof SortOrder;
    teacherId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof CourseCountOrderByAggregateInput>;
    _max?: InstanceType<typeof CourseMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof CourseMinOrderByAggregateInput>;
}
export declare class CourseOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: InstanceType<typeof SortOrderInput>;
    subjectId?: keyof typeof SortOrder;
    teacherId?: keyof typeof SortOrder;
    chat?: InstanceType<typeof ChatOrderByWithRelationInput>;
    classes?: InstanceType<typeof ClassOrderByRelationAggregateInput>;
    members?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    subject?: InstanceType<typeof SubjectOrderByWithRelationInput>;
    teacher?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class CourseScalarWhereWithAggregatesInput {
    AND?: Array<CourseScalarWhereWithAggregatesInput>;
    OR?: Array<CourseScalarWhereWithAggregatesInput>;
    NOT?: Array<CourseScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    chatId?: InstanceType<typeof UuidNullableWithAggregatesFilter>;
    subjectId?: InstanceType<typeof UuidWithAggregatesFilter>;
    teacherId?: InstanceType<typeof UuidWithAggregatesFilter>;
}
export declare class CourseScalarWhereInput {
    AND?: Array<CourseScalarWhereInput>;
    OR?: Array<CourseScalarWhereInput>;
    NOT?: Array<CourseScalarWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    chatId?: InstanceType<typeof UuidNullableFilter>;
    subjectId?: InstanceType<typeof UuidFilter>;
    teacherId?: InstanceType<typeof UuidFilter>;
}
export declare class CourseUncheckedCreateNestedManyWithoutChatInput {
    create?: Array<CourseCreateWithoutChatInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutChatInput>;
    createMany?: InstanceType<typeof CourseCreateManyChatInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
}
export declare class CourseUncheckedCreateNestedManyWithoutClassesInput {
    create?: Array<CourseCreateWithoutClassesInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutClassesInput>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
}
export declare class CourseUncheckedCreateNestedManyWithoutMembersInput {
    create?: Array<CourseCreateWithoutMembersInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutMembersInput>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
}
export declare class CourseUncheckedCreateNestedManyWithoutSubjectInput {
    create?: Array<CourseCreateWithoutSubjectInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutSubjectInput>;
    createMany?: InstanceType<typeof CourseCreateManySubjectInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
}
export declare class CourseUncheckedCreateNestedManyWithoutTeacherInput {
    create?: Array<CourseCreateWithoutTeacherInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutTeacherInput>;
    createMany?: InstanceType<typeof CourseCreateManyTeacherInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
}
export declare class CourseUncheckedCreateWithoutChatInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subjectId: string;
    teacherId: string;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutCoursesInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutCoursesInput>;
}
export declare class CourseUncheckedCreateWithoutClassesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    subjectId: string;
    teacherId: string;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutCoursesInput>;
}
export declare class CourseUncheckedCreateWithoutMembersInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    subjectId: string;
    teacherId: string;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutCoursesInput>;
}
export declare class CourseUncheckedCreateWithoutSubjectInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    teacherId: string;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutCoursesInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutCoursesInput>;
}
export declare class CourseUncheckedCreateWithoutTeacherInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    subjectId: string;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutCoursesInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutCoursesInput>;
}
export declare class CourseUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    subjectId: string;
    teacherId: string;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutCoursesInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutCoursesInput>;
}
export declare class CourseUncheckedUpdateManyWithoutChatNestedInput {
    create?: Array<CourseCreateWithoutChatInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutChatInput>;
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutChatInput>;
    createMany?: InstanceType<typeof CourseCreateManyChatInputEnvelope>;
    set?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    update?: Array<CourseUpdateWithWhereUniqueWithoutChatInput>;
    updateMany?: Array<CourseUpdateManyWithWhereWithoutChatInput>;
    deleteMany?: Array<CourseScalarWhereInput>;
}
export declare class CourseUncheckedUpdateManyWithoutChatInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    subjectId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    teacherId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CourseUncheckedUpdateManyWithoutClassesNestedInput {
    create?: Array<CourseCreateWithoutClassesInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutClassesInput>;
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutClassesInput>;
    set?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    update?: Array<CourseUpdateWithWhereUniqueWithoutClassesInput>;
    updateMany?: Array<CourseUpdateManyWithWhereWithoutClassesInput>;
    deleteMany?: Array<CourseScalarWhereInput>;
}
export declare class CourseUncheckedUpdateManyWithoutClassesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    subjectId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    teacherId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CourseUncheckedUpdateManyWithoutMembersNestedInput {
    create?: Array<CourseCreateWithoutMembersInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutMembersInput>;
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutMembersInput>;
    set?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    update?: Array<CourseUpdateWithWhereUniqueWithoutMembersInput>;
    updateMany?: Array<CourseUpdateManyWithWhereWithoutMembersInput>;
    deleteMany?: Array<CourseScalarWhereInput>;
}
export declare class CourseUncheckedUpdateManyWithoutMembersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    subjectId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    teacherId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CourseUncheckedUpdateManyWithoutSubjectNestedInput {
    create?: Array<CourseCreateWithoutSubjectInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutSubjectInput>;
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutSubjectInput>;
    createMany?: InstanceType<typeof CourseCreateManySubjectInputEnvelope>;
    set?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    update?: Array<CourseUpdateWithWhereUniqueWithoutSubjectInput>;
    updateMany?: Array<CourseUpdateManyWithWhereWithoutSubjectInput>;
    deleteMany?: Array<CourseScalarWhereInput>;
}
export declare class CourseUncheckedUpdateManyWithoutSubjectInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    teacherId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CourseUncheckedUpdateManyWithoutTeacherNestedInput {
    create?: Array<CourseCreateWithoutTeacherInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutTeacherInput>;
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutTeacherInput>;
    createMany?: InstanceType<typeof CourseCreateManyTeacherInputEnvelope>;
    set?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    update?: Array<CourseUpdateWithWhereUniqueWithoutTeacherInput>;
    updateMany?: Array<CourseUpdateManyWithWhereWithoutTeacherInput>;
    deleteMany?: Array<CourseScalarWhereInput>;
}
export declare class CourseUncheckedUpdateManyWithoutTeacherInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    subjectId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CourseUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    subjectId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    teacherId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class CourseUncheckedUpdateWithoutChatInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    subjectId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    teacherId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutCoursesNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutCoursesNestedInput>;
}
export declare class CourseUncheckedUpdateWithoutClassesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    subjectId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    teacherId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutCoursesNestedInput>;
}
export declare class CourseUncheckedUpdateWithoutMembersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    subjectId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    teacherId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutCoursesNestedInput>;
}
export declare class CourseUncheckedUpdateWithoutSubjectInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    teacherId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutCoursesNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutCoursesNestedInput>;
}
export declare class CourseUncheckedUpdateWithoutTeacherInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    subjectId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutCoursesNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutCoursesNestedInput>;
}
export declare class CourseUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    subjectId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    teacherId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutCoursesNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutCoursesNestedInput>;
}
export declare class CourseUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class CourseUpdateManyWithWhereWithoutChatInput {
    where: InstanceType<typeof CourseScalarWhereInput>;
    data: InstanceType<typeof CourseUpdateManyMutationInput>;
}
export declare class CourseUpdateManyWithWhereWithoutClassesInput {
    where: InstanceType<typeof CourseScalarWhereInput>;
    data: InstanceType<typeof CourseUpdateManyMutationInput>;
}
export declare class CourseUpdateManyWithWhereWithoutMembersInput {
    where: InstanceType<typeof CourseScalarWhereInput>;
    data: InstanceType<typeof CourseUpdateManyMutationInput>;
}
export declare class CourseUpdateManyWithWhereWithoutSubjectInput {
    where: InstanceType<typeof CourseScalarWhereInput>;
    data: InstanceType<typeof CourseUpdateManyMutationInput>;
}
export declare class CourseUpdateManyWithWhereWithoutTeacherInput {
    where: InstanceType<typeof CourseScalarWhereInput>;
    data: InstanceType<typeof CourseUpdateManyMutationInput>;
}
export declare class CourseUpdateManyWithoutChatNestedInput {
    create?: Array<CourseCreateWithoutChatInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutChatInput>;
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutChatInput>;
    createMany?: InstanceType<typeof CourseCreateManyChatInputEnvelope>;
    set?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    update?: Array<CourseUpdateWithWhereUniqueWithoutChatInput>;
    updateMany?: Array<CourseUpdateManyWithWhereWithoutChatInput>;
    deleteMany?: Array<CourseScalarWhereInput>;
}
export declare class CourseUpdateManyWithoutClassesNestedInput {
    create?: Array<CourseCreateWithoutClassesInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutClassesInput>;
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutClassesInput>;
    set?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    update?: Array<CourseUpdateWithWhereUniqueWithoutClassesInput>;
    updateMany?: Array<CourseUpdateManyWithWhereWithoutClassesInput>;
    deleteMany?: Array<CourseScalarWhereInput>;
}
export declare class CourseUpdateManyWithoutMembersNestedInput {
    create?: Array<CourseCreateWithoutMembersInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutMembersInput>;
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutMembersInput>;
    set?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    update?: Array<CourseUpdateWithWhereUniqueWithoutMembersInput>;
    updateMany?: Array<CourseUpdateManyWithWhereWithoutMembersInput>;
    deleteMany?: Array<CourseScalarWhereInput>;
}
export declare class CourseUpdateManyWithoutSubjectNestedInput {
    create?: Array<CourseCreateWithoutSubjectInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutSubjectInput>;
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutSubjectInput>;
    createMany?: InstanceType<typeof CourseCreateManySubjectInputEnvelope>;
    set?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    update?: Array<CourseUpdateWithWhereUniqueWithoutSubjectInput>;
    updateMany?: Array<CourseUpdateManyWithWhereWithoutSubjectInput>;
    deleteMany?: Array<CourseScalarWhereInput>;
}
export declare class CourseUpdateManyWithoutTeacherNestedInput {
    create?: Array<CourseCreateWithoutTeacherInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutTeacherInput>;
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutTeacherInput>;
    createMany?: InstanceType<typeof CourseCreateManyTeacherInputEnvelope>;
    set?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    update?: Array<CourseUpdateWithWhereUniqueWithoutTeacherInput>;
    updateMany?: Array<CourseUpdateManyWithWhereWithoutTeacherInput>;
    deleteMany?: Array<CourseScalarWhereInput>;
}
export declare class CourseUpdateWithWhereUniqueWithoutChatInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    data: InstanceType<typeof CourseUpdateWithoutChatInput>;
}
export declare class CourseUpdateWithWhereUniqueWithoutClassesInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    data: InstanceType<typeof CourseUpdateWithoutClassesInput>;
}
export declare class CourseUpdateWithWhereUniqueWithoutMembersInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    data: InstanceType<typeof CourseUpdateWithoutMembersInput>;
}
export declare class CourseUpdateWithWhereUniqueWithoutSubjectInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    data: InstanceType<typeof CourseUpdateWithoutSubjectInput>;
}
export declare class CourseUpdateWithWhereUniqueWithoutTeacherInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    data: InstanceType<typeof CourseUpdateWithoutTeacherInput>;
}
export declare class CourseUpdateWithoutChatInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutCoursesNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutCoursesNestedInput>;
    subject?: InstanceType<typeof SubjectUpdateOneRequiredWithoutCoursesNestedInput>;
    teacher?: InstanceType<typeof UserUpdateOneRequiredWithoutCoursesAsTeacherNestedInput>;
}
export declare class CourseUpdateWithoutClassesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chat?: InstanceType<typeof ChatUpdateOneWithoutCoursesNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutCoursesNestedInput>;
    subject?: InstanceType<typeof SubjectUpdateOneRequiredWithoutCoursesNestedInput>;
    teacher?: InstanceType<typeof UserUpdateOneRequiredWithoutCoursesAsTeacherNestedInput>;
}
export declare class CourseUpdateWithoutMembersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chat?: InstanceType<typeof ChatUpdateOneWithoutCoursesNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutCoursesNestedInput>;
    subject?: InstanceType<typeof SubjectUpdateOneRequiredWithoutCoursesNestedInput>;
    teacher?: InstanceType<typeof UserUpdateOneRequiredWithoutCoursesAsTeacherNestedInput>;
}
export declare class CourseUpdateWithoutSubjectInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chat?: InstanceType<typeof ChatUpdateOneWithoutCoursesNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutCoursesNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutCoursesNestedInput>;
    teacher?: InstanceType<typeof UserUpdateOneRequiredWithoutCoursesAsTeacherNestedInput>;
}
export declare class CourseUpdateWithoutTeacherInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chat?: InstanceType<typeof ChatUpdateOneWithoutCoursesNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutCoursesNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutCoursesNestedInput>;
    subject?: InstanceType<typeof SubjectUpdateOneRequiredWithoutCoursesNestedInput>;
}
export declare class CourseUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chat?: InstanceType<typeof ChatUpdateOneWithoutCoursesNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutCoursesNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutCoursesNestedInput>;
    subject?: InstanceType<typeof SubjectUpdateOneRequiredWithoutCoursesNestedInput>;
    teacher?: InstanceType<typeof UserUpdateOneRequiredWithoutCoursesAsTeacherNestedInput>;
}
export declare class CourseUpsertWithWhereUniqueWithoutChatInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    update: InstanceType<typeof CourseUpdateWithoutChatInput>;
    create: InstanceType<typeof CourseCreateWithoutChatInput>;
}
export declare class CourseUpsertWithWhereUniqueWithoutClassesInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    update: InstanceType<typeof CourseUpdateWithoutClassesInput>;
    create: InstanceType<typeof CourseCreateWithoutClassesInput>;
}
export declare class CourseUpsertWithWhereUniqueWithoutMembersInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    update: InstanceType<typeof CourseUpdateWithoutMembersInput>;
    create: InstanceType<typeof CourseCreateWithoutMembersInput>;
}
export declare class CourseUpsertWithWhereUniqueWithoutSubjectInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    update: InstanceType<typeof CourseUpdateWithoutSubjectInput>;
    create: InstanceType<typeof CourseCreateWithoutSubjectInput>;
}
export declare class CourseUpsertWithWhereUniqueWithoutTeacherInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    update: InstanceType<typeof CourseUpdateWithoutTeacherInput>;
    create: InstanceType<typeof CourseCreateWithoutTeacherInput>;
}
export declare class CourseWhereUniqueInput {
    id?: string;
    AND?: Array<CourseWhereInput>;
    OR?: Array<CourseWhereInput>;
    NOT?: Array<CourseWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    chatId?: InstanceType<typeof UuidNullableFilter>;
    subjectId?: InstanceType<typeof UuidFilter>;
    teacherId?: InstanceType<typeof UuidFilter>;
    chat?: InstanceType<typeof ChatNullableRelationFilter>;
    classes?: InstanceType<typeof ClassListRelationFilter>;
    members?: InstanceType<typeof UserListRelationFilter>;
    subject?: InstanceType<typeof SubjectRelationFilter>;
    teacher?: InstanceType<typeof UserRelationFilter>;
}
export declare class CourseWhereInput {
    AND?: Array<CourseWhereInput>;
    OR?: Array<CourseWhereInput>;
    NOT?: Array<CourseWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    chatId?: InstanceType<typeof UuidNullableFilter>;
    subjectId?: InstanceType<typeof UuidFilter>;
    teacherId?: InstanceType<typeof UuidFilter>;
    chat?: InstanceType<typeof ChatNullableRelationFilter>;
    classes?: InstanceType<typeof ClassListRelationFilter>;
    members?: InstanceType<typeof UserListRelationFilter>;
    subject?: InstanceType<typeof SubjectRelationFilter>;
    teacher?: InstanceType<typeof UserRelationFilter>;
}
export declare class Course {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    chatId: string | null;
    subjectId: string;
    teacherId: string;
    chat?: InstanceType<typeof Chat> | null;
    classes?: Array<Class>;
    members?: Array<User>;
    subject?: InstanceType<typeof Subject>;
    teacher?: InstanceType<typeof User>;
    _count?: InstanceType<typeof CourseCount>;
}
export declare class CreateManyCourseArgs {
    data: Array<CourseCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneCourseArgs {
    data: InstanceType<typeof CourseCreateInput>;
}
export declare class DeleteManyCourseArgs {
    where?: InstanceType<typeof CourseWhereInput>;
}
export declare class DeleteOneCourseArgs {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
}
export declare class FindFirstCourseOrThrowArgs {
    where?: InstanceType<typeof CourseWhereInput>;
    orderBy?: Array<CourseOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CourseScalarFieldEnum>;
}
export declare class FindFirstCourseArgs {
    where?: InstanceType<typeof CourseWhereInput>;
    orderBy?: Array<CourseOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CourseScalarFieldEnum>;
}
export declare class FindManyCourseArgs {
    where?: InstanceType<typeof CourseWhereInput>;
    orderBy?: Array<CourseOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CourseScalarFieldEnum>;
}
export declare class FindUniqueCourseOrThrowArgs {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
}
export declare class FindUniqueCourseArgs {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
}
export declare class UpdateManyCourseArgs {
    data: InstanceType<typeof CourseUpdateManyMutationInput>;
    where?: InstanceType<typeof CourseWhereInput>;
}
export declare class UpdateOneCourseArgs {
    data: InstanceType<typeof CourseUpdateInput>;
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
}
export declare class UpsertOneCourseArgs {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CourseCreateInput>;
    update: InstanceType<typeof CourseUpdateInput>;
}
export declare class AggregateEvent {
    _count?: InstanceType<typeof EventCountAggregate>;
    _min?: InstanceType<typeof EventMinAggregate>;
    _max?: InstanceType<typeof EventMaxAggregate>;
}
export declare class CreateManyEventArgs {
    data: Array<EventCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneEventArgs {
    data: InstanceType<typeof EventCreateInput>;
}
export declare class DeleteManyEventArgs {
    where?: InstanceType<typeof EventWhereInput>;
}
export declare class DeleteOneEventArgs {
    where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
}
export declare class EventAggregateArgs {
    where?: InstanceType<typeof EventWhereInput>;
    orderBy?: Array<EventOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof EventCountAggregateInput>;
    _min?: InstanceType<typeof EventMinAggregateInput>;
    _max?: InstanceType<typeof EventMaxAggregateInput>;
}
export declare class EventCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    description?: true;
    endDate?: true;
    host?: true;
    information?: true;
    location?: true;
    schoolId?: true;
    startDate?: true;
    title?: true;
    _all?: true;
}
export declare class EventCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    description: number;
    endDate: number;
    host: number;
    information: number;
    location: number;
    schoolId: number;
    startDate: number;
    title: number;
    _all: number;
}
export declare class EventCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    endDate?: keyof typeof SortOrder;
    host?: keyof typeof SortOrder;
    information?: keyof typeof SortOrder;
    location?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
}
export declare class EventCount {
    clubs?: number;
    subscribers?: number;
    tickets?: number;
}
export declare class EventCreateManySchoolInputEnvelope {
    data: Array<EventCreateManySchoolInput>;
    skipDuplicates?: boolean;
}
export declare class EventCreateManySchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    description?: string;
    endDate: Date | string;
    host: string;
    information?: InstanceType<typeof EventCreateinformationInput>;
    location?: string;
    startDate: Date | string;
    title: string;
}
export declare class EventCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    description?: string;
    endDate: Date | string;
    host: string;
    information?: InstanceType<typeof EventCreateinformationInput>;
    location?: string;
    schoolId: string;
    startDate: Date | string;
    title: string;
}
export declare class EventCreateNestedManyWithoutClubsInput {
    create?: Array<EventCreateWithoutClubsInput>;
    connectOrCreate?: Array<EventCreateOrConnectWithoutClubsInput>;
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
}
export declare class EventCreateNestedManyWithoutSchoolInput {
    create?: Array<EventCreateWithoutSchoolInput>;
    connectOrCreate?: Array<EventCreateOrConnectWithoutSchoolInput>;
    createMany?: InstanceType<typeof EventCreateManySchoolInputEnvelope>;
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
}
export declare class EventCreateNestedManyWithoutSubscribersInput {
    create?: Array<EventCreateWithoutSubscribersInput>;
    connectOrCreate?: Array<EventCreateOrConnectWithoutSubscribersInput>;
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
}
export declare class EventCreateNestedOneWithoutTicketsInput {
    create?: InstanceType<typeof EventCreateWithoutTicketsInput>;
    connectOrCreate?: InstanceType<typeof EventCreateOrConnectWithoutTicketsInput>;
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
}
export declare class EventCreateOrConnectWithoutClubsInput {
    where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
    create: InstanceType<typeof EventCreateWithoutClubsInput>;
}
export declare class EventCreateOrConnectWithoutSchoolInput {
    where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
    create: InstanceType<typeof EventCreateWithoutSchoolInput>;
}
export declare class EventCreateOrConnectWithoutSubscribersInput {
    where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
    create: InstanceType<typeof EventCreateWithoutSubscribersInput>;
}
export declare class EventCreateOrConnectWithoutTicketsInput {
    where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
    create: InstanceType<typeof EventCreateWithoutTicketsInput>;
}
export declare class EventCreateWithoutClubsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    description?: string;
    endDate: Date | string;
    host: string;
    information?: InstanceType<typeof EventCreateinformationInput>;
    location?: string;
    startDate: Date | string;
    title: string;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutEventsInput>;
    subscribers?: InstanceType<typeof UserCreateNestedManyWithoutEventsInput>;
    tickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutEventInput>;
}
export declare class EventCreateWithoutSchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    description?: string;
    endDate: Date | string;
    host: string;
    information?: InstanceType<typeof EventCreateinformationInput>;
    location?: string;
    startDate: Date | string;
    title: string;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutEventsInput>;
    subscribers?: InstanceType<typeof UserCreateNestedManyWithoutEventsInput>;
    tickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutEventInput>;
}
export declare class EventCreateWithoutSubscribersInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    description?: string;
    endDate: Date | string;
    host: string;
    information?: InstanceType<typeof EventCreateinformationInput>;
    location?: string;
    startDate: Date | string;
    title: string;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutEventsInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutEventsInput>;
    tickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutEventInput>;
}
export declare class EventCreateWithoutTicketsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    description?: string;
    endDate: Date | string;
    host: string;
    information?: InstanceType<typeof EventCreateinformationInput>;
    location?: string;
    startDate: Date | string;
    title: string;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutEventsInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutEventsInput>;
    subscribers?: InstanceType<typeof UserCreateNestedManyWithoutEventsInput>;
}
export declare class EventCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    description?: string;
    endDate: Date | string;
    host: string;
    information?: InstanceType<typeof EventCreateinformationInput>;
    location?: string;
    startDate: Date | string;
    title: string;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutEventsInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutEventsInput>;
    subscribers?: InstanceType<typeof UserCreateNestedManyWithoutEventsInput>;
    tickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutEventInput>;
}
export declare class EventCreateinformationInput {
    set: Array<any>;
}
export declare class EventGroupByArgs {
    where?: InstanceType<typeof EventWhereInput>;
    orderBy?: Array<EventOrderByWithAggregationInput>;
    by: Array<keyof typeof EventScalarFieldEnum>;
    having?: InstanceType<typeof EventScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof EventCountAggregateInput>;
    _min?: InstanceType<typeof EventMinAggregateInput>;
    _max?: InstanceType<typeof EventMaxAggregateInput>;
}
export declare class EventGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    description?: string;
    endDate: Date | string;
    host: string;
    information?: Array<any>;
    location?: string;
    schoolId: string;
    startDate: Date | string;
    title: string;
    _count?: InstanceType<typeof EventCountAggregate>;
    _min?: InstanceType<typeof EventMinAggregate>;
    _max?: InstanceType<typeof EventMaxAggregate>;
}
export declare class EventListRelationFilter {
    every?: InstanceType<typeof EventWhereInput>;
    some?: InstanceType<typeof EventWhereInput>;
    none?: InstanceType<typeof EventWhereInput>;
}
export declare class EventMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    description?: true;
    endDate?: true;
    host?: true;
    location?: true;
    schoolId?: true;
    startDate?: true;
    title?: true;
}
export declare class EventMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    description?: string;
    endDate?: Date | string;
    host?: string;
    location?: string;
    schoolId?: string;
    startDate?: Date | string;
    title?: string;
}
export declare class EventMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    endDate?: keyof typeof SortOrder;
    host?: keyof typeof SortOrder;
    location?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
}
export declare class EventMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    description?: true;
    endDate?: true;
    host?: true;
    location?: true;
    schoolId?: true;
    startDate?: true;
    title?: true;
}
export declare class EventMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    description?: string;
    endDate?: Date | string;
    host?: string;
    location?: string;
    schoolId?: string;
    startDate?: Date | string;
    title?: string;
}
export declare class EventMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    endDate?: keyof typeof SortOrder;
    host?: keyof typeof SortOrder;
    location?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
}
export declare class EventOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class EventOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    description?: InstanceType<typeof SortOrderInput>;
    endDate?: keyof typeof SortOrder;
    host?: keyof typeof SortOrder;
    information?: keyof typeof SortOrder;
    location?: InstanceType<typeof SortOrderInput>;
    schoolId?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    _count?: InstanceType<typeof EventCountOrderByAggregateInput>;
    _max?: InstanceType<typeof EventMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof EventMinOrderByAggregateInput>;
}
export declare class EventOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    description?: InstanceType<typeof SortOrderInput>;
    endDate?: keyof typeof SortOrder;
    host?: keyof typeof SortOrder;
    information?: keyof typeof SortOrder;
    location?: InstanceType<typeof SortOrderInput>;
    schoolId?: keyof typeof SortOrder;
    startDate?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    clubs?: InstanceType<typeof ClubOrderByRelationAggregateInput>;
    school?: InstanceType<typeof SchoolOrderByWithRelationInput>;
    subscribers?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    tickets?: InstanceType<typeof EventTicketOrderByRelationAggregateInput>;
}
export declare class EventRelationFilter {
    is?: InstanceType<typeof EventWhereInput>;
    isNot?: InstanceType<typeof EventWhereInput>;
}
export declare class EventScalarWhereWithAggregatesInput {
    AND?: Array<EventScalarWhereWithAggregatesInput>;
    OR?: Array<EventScalarWhereWithAggregatesInput>;
    NOT?: Array<EventScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    endDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    host?: InstanceType<typeof StringWithAggregatesFilter>;
    information?: InstanceType<typeof JsonNullableListFilter>;
    location?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    schoolId?: InstanceType<typeof UuidWithAggregatesFilter>;
    startDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    title?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class EventScalarWhereInput {
    AND?: Array<EventScalarWhereInput>;
    OR?: Array<EventScalarWhereInput>;
    NOT?: Array<EventScalarWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    endDate?: InstanceType<typeof DateTimeFilter>;
    host?: InstanceType<typeof StringFilter>;
    information?: InstanceType<typeof JsonNullableListFilter>;
    location?: InstanceType<typeof StringNullableFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    title?: InstanceType<typeof StringFilter>;
}
export declare class EventUncheckedCreateNestedManyWithoutClubsInput {
    create?: Array<EventCreateWithoutClubsInput>;
    connectOrCreate?: Array<EventCreateOrConnectWithoutClubsInput>;
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
}
export declare class EventUncheckedCreateNestedManyWithoutSchoolInput {
    create?: Array<EventCreateWithoutSchoolInput>;
    connectOrCreate?: Array<EventCreateOrConnectWithoutSchoolInput>;
    createMany?: InstanceType<typeof EventCreateManySchoolInputEnvelope>;
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
}
export declare class EventUncheckedCreateNestedManyWithoutSubscribersInput {
    create?: Array<EventCreateWithoutSubscribersInput>;
    connectOrCreate?: Array<EventCreateOrConnectWithoutSubscribersInput>;
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
}
export declare class EventUncheckedCreateWithoutClubsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    description?: string;
    endDate: Date | string;
    host: string;
    information?: InstanceType<typeof EventCreateinformationInput>;
    location?: string;
    schoolId: string;
    startDate: Date | string;
    title: string;
    subscribers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutEventsInput>;
    tickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutEventInput>;
}
export declare class EventUncheckedCreateWithoutSchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    description?: string;
    endDate: Date | string;
    host: string;
    information?: InstanceType<typeof EventCreateinformationInput>;
    location?: string;
    startDate: Date | string;
    title: string;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutEventsInput>;
    subscribers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutEventsInput>;
    tickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutEventInput>;
}
export declare class EventUncheckedCreateWithoutSubscribersInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    description?: string;
    endDate: Date | string;
    host: string;
    information?: InstanceType<typeof EventCreateinformationInput>;
    location?: string;
    schoolId: string;
    startDate: Date | string;
    title: string;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutEventsInput>;
    tickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutEventInput>;
}
export declare class EventUncheckedCreateWithoutTicketsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    description?: string;
    endDate: Date | string;
    host: string;
    information?: InstanceType<typeof EventCreateinformationInput>;
    location?: string;
    schoolId: string;
    startDate: Date | string;
    title: string;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutEventsInput>;
    subscribers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutEventsInput>;
}
export declare class EventUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    description?: string;
    endDate: Date | string;
    host: string;
    information?: InstanceType<typeof EventCreateinformationInput>;
    location?: string;
    schoolId: string;
    startDate: Date | string;
    title: string;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutEventsInput>;
    subscribers?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutEventsInput>;
    tickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutEventInput>;
}
export declare class EventUncheckedUpdateManyWithoutClubsNestedInput {
    create?: Array<EventCreateWithoutClubsInput>;
    connectOrCreate?: Array<EventCreateOrConnectWithoutClubsInput>;
    upsert?: Array<EventUpsertWithWhereUniqueWithoutClubsInput>;
    set?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    update?: Array<EventUpdateWithWhereUniqueWithoutClubsInput>;
    updateMany?: Array<EventUpdateManyWithWhereWithoutClubsInput>;
    deleteMany?: Array<EventScalarWhereInput>;
}
export declare class EventUncheckedUpdateManyWithoutClubsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    host?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    information?: InstanceType<typeof EventUpdateinformationInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class EventUncheckedUpdateManyWithoutSchoolNestedInput {
    create?: Array<EventCreateWithoutSchoolInput>;
    connectOrCreate?: Array<EventCreateOrConnectWithoutSchoolInput>;
    upsert?: Array<EventUpsertWithWhereUniqueWithoutSchoolInput>;
    createMany?: InstanceType<typeof EventCreateManySchoolInputEnvelope>;
    set?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    update?: Array<EventUpdateWithWhereUniqueWithoutSchoolInput>;
    updateMany?: Array<EventUpdateManyWithWhereWithoutSchoolInput>;
    deleteMany?: Array<EventScalarWhereInput>;
}
export declare class EventUncheckedUpdateManyWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    host?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    information?: InstanceType<typeof EventUpdateinformationInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class EventUncheckedUpdateManyWithoutSubscribersNestedInput {
    create?: Array<EventCreateWithoutSubscribersInput>;
    connectOrCreate?: Array<EventCreateOrConnectWithoutSubscribersInput>;
    upsert?: Array<EventUpsertWithWhereUniqueWithoutSubscribersInput>;
    set?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    update?: Array<EventUpdateWithWhereUniqueWithoutSubscribersInput>;
    updateMany?: Array<EventUpdateManyWithWhereWithoutSubscribersInput>;
    deleteMany?: Array<EventScalarWhereInput>;
}
export declare class EventUncheckedUpdateManyWithoutSubscribersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    host?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    information?: InstanceType<typeof EventUpdateinformationInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class EventUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    host?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    information?: InstanceType<typeof EventUpdateinformationInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class EventUncheckedUpdateWithoutClubsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    host?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    information?: InstanceType<typeof EventUpdateinformationInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    subscribers?: InstanceType<typeof UserUncheckedUpdateManyWithoutEventsNestedInput>;
    tickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutEventNestedInput>;
}
export declare class EventUncheckedUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    host?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    information?: InstanceType<typeof EventUpdateinformationInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutEventsNestedInput>;
    subscribers?: InstanceType<typeof UserUncheckedUpdateManyWithoutEventsNestedInput>;
    tickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutEventNestedInput>;
}
export declare class EventUncheckedUpdateWithoutSubscribersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    host?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    information?: InstanceType<typeof EventUpdateinformationInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutEventsNestedInput>;
    tickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutEventNestedInput>;
}
export declare class EventUncheckedUpdateWithoutTicketsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    host?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    information?: InstanceType<typeof EventUpdateinformationInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutEventsNestedInput>;
    subscribers?: InstanceType<typeof UserUncheckedUpdateManyWithoutEventsNestedInput>;
}
export declare class EventUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    host?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    information?: InstanceType<typeof EventUpdateinformationInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutEventsNestedInput>;
    subscribers?: InstanceType<typeof UserUncheckedUpdateManyWithoutEventsNestedInput>;
    tickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutEventNestedInput>;
}
export declare class EventUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    host?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    information?: InstanceType<typeof EventUpdateinformationInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class EventUpdateManyWithWhereWithoutClubsInput {
    where: InstanceType<typeof EventScalarWhereInput>;
    data: InstanceType<typeof EventUpdateManyMutationInput>;
}
export declare class EventUpdateManyWithWhereWithoutSchoolInput {
    where: InstanceType<typeof EventScalarWhereInput>;
    data: InstanceType<typeof EventUpdateManyMutationInput>;
}
export declare class EventUpdateManyWithWhereWithoutSubscribersInput {
    where: InstanceType<typeof EventScalarWhereInput>;
    data: InstanceType<typeof EventUpdateManyMutationInput>;
}
export declare class EventUpdateManyWithoutClubsNestedInput {
    create?: Array<EventCreateWithoutClubsInput>;
    connectOrCreate?: Array<EventCreateOrConnectWithoutClubsInput>;
    upsert?: Array<EventUpsertWithWhereUniqueWithoutClubsInput>;
    set?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    update?: Array<EventUpdateWithWhereUniqueWithoutClubsInput>;
    updateMany?: Array<EventUpdateManyWithWhereWithoutClubsInput>;
    deleteMany?: Array<EventScalarWhereInput>;
}
export declare class EventUpdateManyWithoutSchoolNestedInput {
    create?: Array<EventCreateWithoutSchoolInput>;
    connectOrCreate?: Array<EventCreateOrConnectWithoutSchoolInput>;
    upsert?: Array<EventUpsertWithWhereUniqueWithoutSchoolInput>;
    createMany?: InstanceType<typeof EventCreateManySchoolInputEnvelope>;
    set?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    update?: Array<EventUpdateWithWhereUniqueWithoutSchoolInput>;
    updateMany?: Array<EventUpdateManyWithWhereWithoutSchoolInput>;
    deleteMany?: Array<EventScalarWhereInput>;
}
export declare class EventUpdateManyWithoutSubscribersNestedInput {
    create?: Array<EventCreateWithoutSubscribersInput>;
    connectOrCreate?: Array<EventCreateOrConnectWithoutSubscribersInput>;
    upsert?: Array<EventUpsertWithWhereUniqueWithoutSubscribersInput>;
    set?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
    update?: Array<EventUpdateWithWhereUniqueWithoutSubscribersInput>;
    updateMany?: Array<EventUpdateManyWithWhereWithoutSubscribersInput>;
    deleteMany?: Array<EventScalarWhereInput>;
}
export declare class EventUpdateOneRequiredWithoutTicketsNestedInput {
    create?: InstanceType<typeof EventCreateWithoutTicketsInput>;
    connectOrCreate?: InstanceType<typeof EventCreateOrConnectWithoutTicketsInput>;
    upsert?: InstanceType<typeof EventUpsertWithoutTicketsInput>;
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof EventUpdateToOneWithWhereWithoutTicketsInput>;
}
export declare class EventUpdateToOneWithWhereWithoutTicketsInput {
    where?: InstanceType<typeof EventWhereInput>;
    data: InstanceType<typeof EventUpdateWithoutTicketsInput>;
}
export declare class EventUpdateWithWhereUniqueWithoutClubsInput {
    where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
    data: InstanceType<typeof EventUpdateWithoutClubsInput>;
}
export declare class EventUpdateWithWhereUniqueWithoutSchoolInput {
    where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
    data: InstanceType<typeof EventUpdateWithoutSchoolInput>;
}
export declare class EventUpdateWithWhereUniqueWithoutSubscribersInput {
    where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
    data: InstanceType<typeof EventUpdateWithoutSubscribersInput>;
}
export declare class EventUpdateWithoutClubsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    host?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    information?: InstanceType<typeof EventUpdateinformationInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutEventsNestedInput>;
    subscribers?: InstanceType<typeof UserUpdateManyWithoutEventsNestedInput>;
    tickets?: InstanceType<typeof EventTicketUpdateManyWithoutEventNestedInput>;
}
export declare class EventUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    host?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    information?: InstanceType<typeof EventUpdateinformationInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutEventsNestedInput>;
    subscribers?: InstanceType<typeof UserUpdateManyWithoutEventsNestedInput>;
    tickets?: InstanceType<typeof EventTicketUpdateManyWithoutEventNestedInput>;
}
export declare class EventUpdateWithoutSubscribersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    host?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    information?: InstanceType<typeof EventUpdateinformationInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutEventsNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutEventsNestedInput>;
    tickets?: InstanceType<typeof EventTicketUpdateManyWithoutEventNestedInput>;
}
export declare class EventUpdateWithoutTicketsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    host?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    information?: InstanceType<typeof EventUpdateinformationInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutEventsNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutEventsNestedInput>;
    subscribers?: InstanceType<typeof UserUpdateManyWithoutEventsNestedInput>;
}
export declare class EventUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    endDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    host?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    information?: InstanceType<typeof EventUpdateinformationInput>;
    location?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    startDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutEventsNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutEventsNestedInput>;
    subscribers?: InstanceType<typeof UserUpdateManyWithoutEventsNestedInput>;
    tickets?: InstanceType<typeof EventTicketUpdateManyWithoutEventNestedInput>;
}
export declare class EventUpdateinformationInput {
    set?: Array<any>;
    push?: Array<any>;
}
export declare class EventUpsertWithWhereUniqueWithoutClubsInput {
    where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
    update: InstanceType<typeof EventUpdateWithoutClubsInput>;
    create: InstanceType<typeof EventCreateWithoutClubsInput>;
}
export declare class EventUpsertWithWhereUniqueWithoutSchoolInput {
    where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
    update: InstanceType<typeof EventUpdateWithoutSchoolInput>;
    create: InstanceType<typeof EventCreateWithoutSchoolInput>;
}
export declare class EventUpsertWithWhereUniqueWithoutSubscribersInput {
    where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
    update: InstanceType<typeof EventUpdateWithoutSubscribersInput>;
    create: InstanceType<typeof EventCreateWithoutSubscribersInput>;
}
export declare class EventUpsertWithoutTicketsInput {
    update: InstanceType<typeof EventUpdateWithoutTicketsInput>;
    create: InstanceType<typeof EventCreateWithoutTicketsInput>;
    where?: InstanceType<typeof EventWhereInput>;
}
export declare class EventWhereUniqueInput {
    id?: string;
    AND?: Array<EventWhereInput>;
    OR?: Array<EventWhereInput>;
    NOT?: Array<EventWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    endDate?: InstanceType<typeof DateTimeFilter>;
    host?: InstanceType<typeof StringFilter>;
    information?: InstanceType<typeof JsonNullableListFilter>;
    location?: InstanceType<typeof StringNullableFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    title?: InstanceType<typeof StringFilter>;
    clubs?: InstanceType<typeof ClubListRelationFilter>;
    school?: InstanceType<typeof SchoolRelationFilter>;
    subscribers?: InstanceType<typeof UserListRelationFilter>;
    tickets?: InstanceType<typeof EventTicketListRelationFilter>;
}
export declare class EventWhereInput {
    AND?: Array<EventWhereInput>;
    OR?: Array<EventWhereInput>;
    NOT?: Array<EventWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    endDate?: InstanceType<typeof DateTimeFilter>;
    host?: InstanceType<typeof StringFilter>;
    information?: InstanceType<typeof JsonNullableListFilter>;
    location?: InstanceType<typeof StringNullableFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
    startDate?: InstanceType<typeof DateTimeFilter>;
    title?: InstanceType<typeof StringFilter>;
    clubs?: InstanceType<typeof ClubListRelationFilter>;
    school?: InstanceType<typeof SchoolRelationFilter>;
    subscribers?: InstanceType<typeof UserListRelationFilter>;
    tickets?: InstanceType<typeof EventTicketListRelationFilter>;
}
export declare class Event {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    endDate: Date;
    host: string;
    information: Array<any>;
    location: string | null;
    schoolId: string;
    startDate: Date;
    title: string;
    clubs?: Array<Club>;
    school?: InstanceType<typeof School>;
    subscribers?: Array<User>;
    tickets?: Array<EventTicket>;
    _count?: InstanceType<typeof EventCount>;
}
export declare class FindFirstEventOrThrowArgs {
    where?: InstanceType<typeof EventWhereInput>;
    orderBy?: Array<EventOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof EventScalarFieldEnum>;
}
export declare class FindFirstEventArgs {
    where?: InstanceType<typeof EventWhereInput>;
    orderBy?: Array<EventOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof EventScalarFieldEnum>;
}
export declare class FindManyEventArgs {
    where?: InstanceType<typeof EventWhereInput>;
    orderBy?: Array<EventOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof EventScalarFieldEnum>;
}
export declare class FindUniqueEventOrThrowArgs {
    where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
}
export declare class FindUniqueEventArgs {
    where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
}
export declare class UpdateManyEventArgs {
    data: InstanceType<typeof EventUpdateManyMutationInput>;
    where?: InstanceType<typeof EventWhereInput>;
}
export declare class UpdateOneEventArgs {
    data: InstanceType<typeof EventUpdateInput>;
    where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
}
export declare class UpsertOneEventArgs {
    where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
    create: InstanceType<typeof EventCreateInput>;
    update: InstanceType<typeof EventUpdateInput>;
}
export declare class AggregateEventTicket {
    _count?: InstanceType<typeof EventTicketCountAggregate>;
    _avg?: InstanceType<typeof EventTicketAvgAggregate>;
    _sum?: InstanceType<typeof EventTicketSumAggregate>;
    _min?: InstanceType<typeof EventTicketMinAggregate>;
    _max?: InstanceType<typeof EventTicketMaxAggregate>;
}
export declare class CreateManyEventTicketArgs {
    data: Array<EventTicketCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneEventTicketArgs {
    data: InstanceType<typeof EventTicketCreateInput>;
}
export declare class DeleteManyEventTicketArgs {
    where?: InstanceType<typeof EventTicketWhereInput>;
}
export declare class DeleteOneEventTicketArgs {
    where: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;
}
export declare class EventTicketAggregateArgs {
    where?: InstanceType<typeof EventTicketWhereInput>;
    orderBy?: Array<EventTicketOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof EventTicketCountAggregateInput>;
    _avg?: InstanceType<typeof EventTicketAvgAggregateInput>;
    _sum?: InstanceType<typeof EventTicketSumAggregateInput>;
    _min?: InstanceType<typeof EventTicketMinAggregateInput>;
    _max?: InstanceType<typeof EventTicketMaxAggregateInput>;
}
export declare class EventTicketAvgAggregateInput {
    price?: true;
}
export declare class EventTicketAvgAggregate {
    price?: number;
}
export declare class EventTicketAvgOrderByAggregateInput {
    price?: keyof typeof SortOrder;
}
export declare class EventTicketCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    buyerId?: true;
    eventId?: true;
    price?: true;
    saleDate?: true;
    _all?: true;
}
export declare class EventTicketCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    buyerId: number;
    eventId: number;
    price: number;
    saleDate: number;
    _all: number;
}
export declare class EventTicketCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    buyerId?: keyof typeof SortOrder;
    eventId?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    saleDate?: keyof typeof SortOrder;
}
export declare class EventTicketCreateManyBuyerInputEnvelope {
    data: Array<EventTicketCreateManyBuyerInput>;
    skipDuplicates?: boolean;
}
export declare class EventTicketCreateManyBuyerInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    eventId: string;
    price: number;
    saleDate: Date | string;
}
export declare class EventTicketCreateManyEventInputEnvelope {
    data: Array<EventTicketCreateManyEventInput>;
    skipDuplicates?: boolean;
}
export declare class EventTicketCreateManyEventInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    buyerId: string;
    price: number;
    saleDate: Date | string;
}
export declare class EventTicketCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    buyerId: string;
    eventId: string;
    price: number;
    saleDate: Date | string;
}
export declare class EventTicketCreateNestedManyWithoutBuyerInput {
    create?: Array<EventTicketCreateWithoutBuyerInput>;
    connectOrCreate?: Array<EventTicketCreateOrConnectWithoutBuyerInput>;
    createMany?: InstanceType<typeof EventTicketCreateManyBuyerInputEnvelope>;
    connect?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
}
export declare class EventTicketCreateNestedManyWithoutEventInput {
    create?: Array<EventTicketCreateWithoutEventInput>;
    connectOrCreate?: Array<EventTicketCreateOrConnectWithoutEventInput>;
    createMany?: InstanceType<typeof EventTicketCreateManyEventInputEnvelope>;
    connect?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
}
export declare class EventTicketCreateOrConnectWithoutBuyerInput {
    where: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;
    create: InstanceType<typeof EventTicketCreateWithoutBuyerInput>;
}
export declare class EventTicketCreateOrConnectWithoutEventInput {
    where: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;
    create: InstanceType<typeof EventTicketCreateWithoutEventInput>;
}
export declare class EventTicketCreateWithoutBuyerInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    price: number;
    saleDate: Date | string;
    event: InstanceType<typeof EventCreateNestedOneWithoutTicketsInput>;
}
export declare class EventTicketCreateWithoutEventInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    price: number;
    saleDate: Date | string;
    buyer: InstanceType<typeof UserCreateNestedOneWithoutEventTicketsInput>;
}
export declare class EventTicketCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    price: number;
    saleDate: Date | string;
    buyer: InstanceType<typeof UserCreateNestedOneWithoutEventTicketsInput>;
    event: InstanceType<typeof EventCreateNestedOneWithoutTicketsInput>;
}
export declare class EventTicketGroupByArgs {
    where?: InstanceType<typeof EventTicketWhereInput>;
    orderBy?: Array<EventTicketOrderByWithAggregationInput>;
    by: Array<keyof typeof EventTicketScalarFieldEnum>;
    having?: InstanceType<typeof EventTicketScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof EventTicketCountAggregateInput>;
    _avg?: InstanceType<typeof EventTicketAvgAggregateInput>;
    _sum?: InstanceType<typeof EventTicketSumAggregateInput>;
    _min?: InstanceType<typeof EventTicketMinAggregateInput>;
    _max?: InstanceType<typeof EventTicketMaxAggregateInput>;
}
export declare class EventTicketGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    buyerId: string;
    eventId: string;
    price: number;
    saleDate: Date | string;
    _count?: InstanceType<typeof EventTicketCountAggregate>;
    _avg?: InstanceType<typeof EventTicketAvgAggregate>;
    _sum?: InstanceType<typeof EventTicketSumAggregate>;
    _min?: InstanceType<typeof EventTicketMinAggregate>;
    _max?: InstanceType<typeof EventTicketMaxAggregate>;
}
export declare class EventTicketListRelationFilter {
    every?: InstanceType<typeof EventTicketWhereInput>;
    some?: InstanceType<typeof EventTicketWhereInput>;
    none?: InstanceType<typeof EventTicketWhereInput>;
}
export declare class EventTicketMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    buyerId?: true;
    eventId?: true;
    price?: true;
    saleDate?: true;
}
export declare class EventTicketMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    buyerId?: string;
    eventId?: string;
    price?: number;
    saleDate?: Date | string;
}
export declare class EventTicketMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    buyerId?: keyof typeof SortOrder;
    eventId?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    saleDate?: keyof typeof SortOrder;
}
export declare class EventTicketMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    buyerId?: true;
    eventId?: true;
    price?: true;
    saleDate?: true;
}
export declare class EventTicketMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    buyerId?: string;
    eventId?: string;
    price?: number;
    saleDate?: Date | string;
}
export declare class EventTicketMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    buyerId?: keyof typeof SortOrder;
    eventId?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    saleDate?: keyof typeof SortOrder;
}
export declare class EventTicketOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class EventTicketOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    buyerId?: keyof typeof SortOrder;
    eventId?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    saleDate?: keyof typeof SortOrder;
    _count?: InstanceType<typeof EventTicketCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof EventTicketAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof EventTicketMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof EventTicketMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof EventTicketSumOrderByAggregateInput>;
}
export declare class EventTicketOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    buyerId?: keyof typeof SortOrder;
    eventId?: keyof typeof SortOrder;
    price?: keyof typeof SortOrder;
    saleDate?: keyof typeof SortOrder;
    buyer?: InstanceType<typeof UserOrderByWithRelationInput>;
    event?: InstanceType<typeof EventOrderByWithRelationInput>;
}
export declare class EventTicketScalarWhereWithAggregatesInput {
    AND?: Array<EventTicketScalarWhereWithAggregatesInput>;
    OR?: Array<EventTicketScalarWhereWithAggregatesInput>;
    NOT?: Array<EventTicketScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    buyerId?: InstanceType<typeof UuidWithAggregatesFilter>;
    eventId?: InstanceType<typeof UuidWithAggregatesFilter>;
    price?: InstanceType<typeof IntWithAggregatesFilter>;
    saleDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}
export declare class EventTicketScalarWhereInput {
    AND?: Array<EventTicketScalarWhereInput>;
    OR?: Array<EventTicketScalarWhereInput>;
    NOT?: Array<EventTicketScalarWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    buyerId?: InstanceType<typeof UuidFilter>;
    eventId?: InstanceType<typeof UuidFilter>;
    price?: InstanceType<typeof IntFilter>;
    saleDate?: InstanceType<typeof DateTimeFilter>;
}
export declare class EventTicketSumAggregateInput {
    price?: true;
}
export declare class EventTicketSumAggregate {
    price?: number;
}
export declare class EventTicketSumOrderByAggregateInput {
    price?: keyof typeof SortOrder;
}
export declare class EventTicketUncheckedCreateNestedManyWithoutBuyerInput {
    create?: Array<EventTicketCreateWithoutBuyerInput>;
    connectOrCreate?: Array<EventTicketCreateOrConnectWithoutBuyerInput>;
    createMany?: InstanceType<typeof EventTicketCreateManyBuyerInputEnvelope>;
    connect?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
}
export declare class EventTicketUncheckedCreateNestedManyWithoutEventInput {
    create?: Array<EventTicketCreateWithoutEventInput>;
    connectOrCreate?: Array<EventTicketCreateOrConnectWithoutEventInput>;
    createMany?: InstanceType<typeof EventTicketCreateManyEventInputEnvelope>;
    connect?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
}
export declare class EventTicketUncheckedCreateWithoutBuyerInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    eventId: string;
    price: number;
    saleDate: Date | string;
}
export declare class EventTicketUncheckedCreateWithoutEventInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    buyerId: string;
    price: number;
    saleDate: Date | string;
}
export declare class EventTicketUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    buyerId: string;
    eventId: string;
    price: number;
    saleDate: Date | string;
}
export declare class EventTicketUncheckedUpdateManyWithoutBuyerNestedInput {
    create?: Array<EventTicketCreateWithoutBuyerInput>;
    connectOrCreate?: Array<EventTicketCreateOrConnectWithoutBuyerInput>;
    upsert?: Array<EventTicketUpsertWithWhereUniqueWithoutBuyerInput>;
    createMany?: InstanceType<typeof EventTicketCreateManyBuyerInputEnvelope>;
    set?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
    update?: Array<EventTicketUpdateWithWhereUniqueWithoutBuyerInput>;
    updateMany?: Array<EventTicketUpdateManyWithWhereWithoutBuyerInput>;
    deleteMany?: Array<EventTicketScalarWhereInput>;
}
export declare class EventTicketUncheckedUpdateManyWithoutBuyerInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    eventId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    saleDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class EventTicketUncheckedUpdateManyWithoutEventNestedInput {
    create?: Array<EventTicketCreateWithoutEventInput>;
    connectOrCreate?: Array<EventTicketCreateOrConnectWithoutEventInput>;
    upsert?: Array<EventTicketUpsertWithWhereUniqueWithoutEventInput>;
    createMany?: InstanceType<typeof EventTicketCreateManyEventInputEnvelope>;
    set?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
    update?: Array<EventTicketUpdateWithWhereUniqueWithoutEventInput>;
    updateMany?: Array<EventTicketUpdateManyWithWhereWithoutEventInput>;
    deleteMany?: Array<EventTicketScalarWhereInput>;
}
export declare class EventTicketUncheckedUpdateManyWithoutEventInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    buyerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    saleDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class EventTicketUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    buyerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    eventId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    saleDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class EventTicketUncheckedUpdateWithoutBuyerInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    eventId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    saleDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class EventTicketUncheckedUpdateWithoutEventInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    buyerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    saleDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class EventTicketUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    buyerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    eventId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    saleDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class EventTicketUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    saleDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class EventTicketUpdateManyWithWhereWithoutBuyerInput {
    where: InstanceType<typeof EventTicketScalarWhereInput>;
    data: InstanceType<typeof EventTicketUpdateManyMutationInput>;
}
export declare class EventTicketUpdateManyWithWhereWithoutEventInput {
    where: InstanceType<typeof EventTicketScalarWhereInput>;
    data: InstanceType<typeof EventTicketUpdateManyMutationInput>;
}
export declare class EventTicketUpdateManyWithoutBuyerNestedInput {
    create?: Array<EventTicketCreateWithoutBuyerInput>;
    connectOrCreate?: Array<EventTicketCreateOrConnectWithoutBuyerInput>;
    upsert?: Array<EventTicketUpsertWithWhereUniqueWithoutBuyerInput>;
    createMany?: InstanceType<typeof EventTicketCreateManyBuyerInputEnvelope>;
    set?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
    update?: Array<EventTicketUpdateWithWhereUniqueWithoutBuyerInput>;
    updateMany?: Array<EventTicketUpdateManyWithWhereWithoutBuyerInput>;
    deleteMany?: Array<EventTicketScalarWhereInput>;
}
export declare class EventTicketUpdateManyWithoutEventNestedInput {
    create?: Array<EventTicketCreateWithoutEventInput>;
    connectOrCreate?: Array<EventTicketCreateOrConnectWithoutEventInput>;
    upsert?: Array<EventTicketUpsertWithWhereUniqueWithoutEventInput>;
    createMany?: InstanceType<typeof EventTicketCreateManyEventInputEnvelope>;
    set?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
    update?: Array<EventTicketUpdateWithWhereUniqueWithoutEventInput>;
    updateMany?: Array<EventTicketUpdateManyWithWhereWithoutEventInput>;
    deleteMany?: Array<EventTicketScalarWhereInput>;
}
export declare class EventTicketUpdateWithWhereUniqueWithoutBuyerInput {
    where: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;
    data: InstanceType<typeof EventTicketUpdateWithoutBuyerInput>;
}
export declare class EventTicketUpdateWithWhereUniqueWithoutEventInput {
    where: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;
    data: InstanceType<typeof EventTicketUpdateWithoutEventInput>;
}
export declare class EventTicketUpdateWithoutBuyerInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    saleDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    event?: InstanceType<typeof EventUpdateOneRequiredWithoutTicketsNestedInput>;
}
export declare class EventTicketUpdateWithoutEventInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    saleDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    buyer?: InstanceType<typeof UserUpdateOneRequiredWithoutEventTicketsNestedInput>;
}
export declare class EventTicketUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    saleDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    buyer?: InstanceType<typeof UserUpdateOneRequiredWithoutEventTicketsNestedInput>;
    event?: InstanceType<typeof EventUpdateOneRequiredWithoutTicketsNestedInput>;
}
export declare class EventTicketUpsertWithWhereUniqueWithoutBuyerInput {
    where: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;
    update: InstanceType<typeof EventTicketUpdateWithoutBuyerInput>;
    create: InstanceType<typeof EventTicketCreateWithoutBuyerInput>;
}
export declare class EventTicketUpsertWithWhereUniqueWithoutEventInput {
    where: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;
    update: InstanceType<typeof EventTicketUpdateWithoutEventInput>;
    create: InstanceType<typeof EventTicketCreateWithoutEventInput>;
}
export declare class EventTicketWhereUniqueInput {
    id?: string;
    AND?: Array<EventTicketWhereInput>;
    OR?: Array<EventTicketWhereInput>;
    NOT?: Array<EventTicketWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    buyerId?: InstanceType<typeof UuidFilter>;
    eventId?: InstanceType<typeof UuidFilter>;
    price?: InstanceType<typeof IntFilter>;
    saleDate?: InstanceType<typeof DateTimeFilter>;
    buyer?: InstanceType<typeof UserRelationFilter>;
    event?: InstanceType<typeof EventRelationFilter>;
}
export declare class EventTicketWhereInput {
    AND?: Array<EventTicketWhereInput>;
    OR?: Array<EventTicketWhereInput>;
    NOT?: Array<EventTicketWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    buyerId?: InstanceType<typeof UuidFilter>;
    eventId?: InstanceType<typeof UuidFilter>;
    price?: InstanceType<typeof IntFilter>;
    saleDate?: InstanceType<typeof DateTimeFilter>;
    buyer?: InstanceType<typeof UserRelationFilter>;
    event?: InstanceType<typeof EventRelationFilter>;
}
export declare class EventTicket {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    buyerId: string;
    eventId: string;
    price: number;
    saleDate: Date;
    buyer?: InstanceType<typeof User>;
    event?: InstanceType<typeof Event>;
}
export declare class FindFirstEventTicketOrThrowArgs {
    where?: InstanceType<typeof EventTicketWhereInput>;
    orderBy?: Array<EventTicketOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof EventTicketScalarFieldEnum>;
}
export declare class FindFirstEventTicketArgs {
    where?: InstanceType<typeof EventTicketWhereInput>;
    orderBy?: Array<EventTicketOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof EventTicketScalarFieldEnum>;
}
export declare class FindManyEventTicketArgs {
    where?: InstanceType<typeof EventTicketWhereInput>;
    orderBy?: Array<EventTicketOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof EventTicketScalarFieldEnum>;
}
export declare class FindUniqueEventTicketOrThrowArgs {
    where: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;
}
export declare class FindUniqueEventTicketArgs {
    where: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;
}
export declare class UpdateManyEventTicketArgs {
    data: InstanceType<typeof EventTicketUpdateManyMutationInput>;
    where?: InstanceType<typeof EventTicketWhereInput>;
}
export declare class UpdateOneEventTicketArgs {
    data: InstanceType<typeof EventTicketUpdateInput>;
    where: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;
}
export declare class UpsertOneEventTicketArgs {
    where: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;
    create: InstanceType<typeof EventTicketCreateInput>;
    update: InstanceType<typeof EventTicketUpdateInput>;
}
export declare class AggregateGrade {
    _count?: InstanceType<typeof GradeCountAggregate>;
    _min?: InstanceType<typeof GradeMinAggregate>;
    _max?: InstanceType<typeof GradeMaxAggregate>;
}
export declare class CreateManyGradeArgs {
    data: Array<GradeCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneGradeArgs {
    data: InstanceType<typeof GradeCreateInput>;
}
export declare class DeleteManyGradeArgs {
    where?: InstanceType<typeof GradeWhereInput>;
}
export declare class DeleteOneGradeArgs {
    where: Prisma.AtLeast<GradeWhereUniqueInput, 'id'>;
}
export declare class FindFirstGradeOrThrowArgs {
    where?: InstanceType<typeof GradeWhereInput>;
    orderBy?: Array<GradeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<GradeWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof GradeScalarFieldEnum>;
}
export declare class FindFirstGradeArgs {
    where?: InstanceType<typeof GradeWhereInput>;
    orderBy?: Array<GradeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<GradeWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof GradeScalarFieldEnum>;
}
export declare class FindManyGradeArgs {
    where?: InstanceType<typeof GradeWhereInput>;
    orderBy?: Array<GradeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<GradeWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof GradeScalarFieldEnum>;
}
export declare class FindUniqueGradeOrThrowArgs {
    where: Prisma.AtLeast<GradeWhereUniqueInput, 'id'>;
}
export declare class FindUniqueGradeArgs {
    where: Prisma.AtLeast<GradeWhereUniqueInput, 'id'>;
}
export declare class GradeAggregateArgs {
    where?: InstanceType<typeof GradeWhereInput>;
    orderBy?: Array<GradeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<GradeWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof GradeCountAggregateInput>;
    _min?: InstanceType<typeof GradeMinAggregateInput>;
    _max?: InstanceType<typeof GradeMaxAggregateInput>;
}
export declare class GradeCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    level?: true;
    schoolId?: true;
    _all?: true;
}
export declare class GradeCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    level: number;
    schoolId: number;
    _all: number;
}
export declare class GradeCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    level?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
}
export declare class GradeCount {
    classes?: number;
}
export declare class GradeCreateManySchoolInputEnvelope {
    data: Array<GradeCreateManySchoolInput>;
    skipDuplicates?: boolean;
}
export declare class GradeCreateManySchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    level: keyof typeof GradeLevel;
}
export declare class GradeCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    level: keyof typeof GradeLevel;
    schoolId: string;
}
export declare class GradeCreateNestedManyWithoutSchoolInput {
    create?: Array<GradeCreateWithoutSchoolInput>;
    connectOrCreate?: Array<GradeCreateOrConnectWithoutSchoolInput>;
    createMany?: InstanceType<typeof GradeCreateManySchoolInputEnvelope>;
    connect?: Array<Prisma.AtLeast<GradeWhereUniqueInput, 'id'>>;
}
export declare class GradeCreateNestedOneWithoutClassesInput {
    create?: InstanceType<typeof GradeCreateWithoutClassesInput>;
    connectOrCreate?: InstanceType<typeof GradeCreateOrConnectWithoutClassesInput>;
    connect?: Prisma.AtLeast<GradeWhereUniqueInput, 'id'>;
}
export declare class GradeCreateOrConnectWithoutClassesInput {
    where: Prisma.AtLeast<GradeWhereUniqueInput, 'id'>;
    create: InstanceType<typeof GradeCreateWithoutClassesInput>;
}
export declare class GradeCreateOrConnectWithoutSchoolInput {
    where: Prisma.AtLeast<GradeWhereUniqueInput, 'id'>;
    create: InstanceType<typeof GradeCreateWithoutSchoolInput>;
}
export declare class GradeCreateWithoutClassesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    level: keyof typeof GradeLevel;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutGradesInput>;
}
export declare class GradeCreateWithoutSchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    level: keyof typeof GradeLevel;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutGradeInput>;
}
export declare class GradeCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    level: keyof typeof GradeLevel;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutGradeInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutGradesInput>;
}
export declare class GradeGroupByArgs {
    where?: InstanceType<typeof GradeWhereInput>;
    orderBy?: Array<GradeOrderByWithAggregationInput>;
    by: Array<keyof typeof GradeScalarFieldEnum>;
    having?: InstanceType<typeof GradeScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof GradeCountAggregateInput>;
    _min?: InstanceType<typeof GradeMinAggregateInput>;
    _max?: InstanceType<typeof GradeMaxAggregateInput>;
}
export declare class GradeGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    level: keyof typeof GradeLevel;
    schoolId: string;
    _count?: InstanceType<typeof GradeCountAggregate>;
    _min?: InstanceType<typeof GradeMinAggregate>;
    _max?: InstanceType<typeof GradeMaxAggregate>;
}
export declare class GradeListRelationFilter {
    every?: InstanceType<typeof GradeWhereInput>;
    some?: InstanceType<typeof GradeWhereInput>;
    none?: InstanceType<typeof GradeWhereInput>;
}
export declare class GradeMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    level?: true;
    schoolId?: true;
}
export declare class GradeMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    level?: keyof typeof GradeLevel;
    schoolId?: string;
}
export declare class GradeMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    level?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
}
export declare class GradeMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    level?: true;
    schoolId?: true;
}
export declare class GradeMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    level?: keyof typeof GradeLevel;
    schoolId?: string;
}
export declare class GradeMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    level?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
}
export declare class GradeOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class GradeOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    level?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof GradeCountOrderByAggregateInput>;
    _max?: InstanceType<typeof GradeMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof GradeMinOrderByAggregateInput>;
}
export declare class GradeOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    level?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    classes?: InstanceType<typeof ClassOrderByRelationAggregateInput>;
    school?: InstanceType<typeof SchoolOrderByWithRelationInput>;
}
export declare class GradeRelationFilter {
    is?: InstanceType<typeof GradeWhereInput>;
    isNot?: InstanceType<typeof GradeWhereInput>;
}
export declare class GradeScalarWhereWithAggregatesInput {
    AND?: Array<GradeScalarWhereWithAggregatesInput>;
    OR?: Array<GradeScalarWhereWithAggregatesInput>;
    NOT?: Array<GradeScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    level?: InstanceType<typeof EnumGradeLevelWithAggregatesFilter>;
    schoolId?: InstanceType<typeof UuidWithAggregatesFilter>;
}
export declare class GradeScalarWhereInput {
    AND?: Array<GradeScalarWhereInput>;
    OR?: Array<GradeScalarWhereInput>;
    NOT?: Array<GradeScalarWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    level?: InstanceType<typeof EnumGradeLevelFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
}
export declare class GradeUncheckedCreateNestedManyWithoutSchoolInput {
    create?: Array<GradeCreateWithoutSchoolInput>;
    connectOrCreate?: Array<GradeCreateOrConnectWithoutSchoolInput>;
    createMany?: InstanceType<typeof GradeCreateManySchoolInputEnvelope>;
    connect?: Array<Prisma.AtLeast<GradeWhereUniqueInput, 'id'>>;
}
export declare class GradeUncheckedCreateWithoutClassesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    level: keyof typeof GradeLevel;
    schoolId: string;
}
export declare class GradeUncheckedCreateWithoutSchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    level: keyof typeof GradeLevel;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutGradeInput>;
}
export declare class GradeUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    level: keyof typeof GradeLevel;
    schoolId: string;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutGradeInput>;
}
export declare class GradeUncheckedUpdateManyWithoutSchoolNestedInput {
    create?: Array<GradeCreateWithoutSchoolInput>;
    connectOrCreate?: Array<GradeCreateOrConnectWithoutSchoolInput>;
    upsert?: Array<GradeUpsertWithWhereUniqueWithoutSchoolInput>;
    createMany?: InstanceType<typeof GradeCreateManySchoolInputEnvelope>;
    set?: Array<Prisma.AtLeast<GradeWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<GradeWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<GradeWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<GradeWhereUniqueInput, 'id'>>;
    update?: Array<GradeUpdateWithWhereUniqueWithoutSchoolInput>;
    updateMany?: Array<GradeUpdateManyWithWhereWithoutSchoolInput>;
    deleteMany?: Array<GradeScalarWhereInput>;
}
export declare class GradeUncheckedUpdateManyWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    level?: InstanceType<typeof EnumGradeLevelFieldUpdateOperationsInput>;
}
export declare class GradeUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    level?: InstanceType<typeof EnumGradeLevelFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class GradeUncheckedUpdateWithoutClassesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    level?: InstanceType<typeof EnumGradeLevelFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class GradeUncheckedUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    level?: InstanceType<typeof EnumGradeLevelFieldUpdateOperationsInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutGradeNestedInput>;
}
export declare class GradeUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    level?: InstanceType<typeof EnumGradeLevelFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutGradeNestedInput>;
}
export declare class GradeUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    level?: InstanceType<typeof EnumGradeLevelFieldUpdateOperationsInput>;
}
export declare class GradeUpdateManyWithWhereWithoutSchoolInput {
    where: InstanceType<typeof GradeScalarWhereInput>;
    data: InstanceType<typeof GradeUpdateManyMutationInput>;
}
export declare class GradeUpdateManyWithoutSchoolNestedInput {
    create?: Array<GradeCreateWithoutSchoolInput>;
    connectOrCreate?: Array<GradeCreateOrConnectWithoutSchoolInput>;
    upsert?: Array<GradeUpsertWithWhereUniqueWithoutSchoolInput>;
    createMany?: InstanceType<typeof GradeCreateManySchoolInputEnvelope>;
    set?: Array<Prisma.AtLeast<GradeWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<GradeWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<GradeWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<GradeWhereUniqueInput, 'id'>>;
    update?: Array<GradeUpdateWithWhereUniqueWithoutSchoolInput>;
    updateMany?: Array<GradeUpdateManyWithWhereWithoutSchoolInput>;
    deleteMany?: Array<GradeScalarWhereInput>;
}
export declare class GradeUpdateOneRequiredWithoutClassesNestedInput {
    create?: InstanceType<typeof GradeCreateWithoutClassesInput>;
    connectOrCreate?: InstanceType<typeof GradeCreateOrConnectWithoutClassesInput>;
    upsert?: InstanceType<typeof GradeUpsertWithoutClassesInput>;
    connect?: Prisma.AtLeast<GradeWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof GradeUpdateToOneWithWhereWithoutClassesInput>;
}
export declare class GradeUpdateToOneWithWhereWithoutClassesInput {
    where?: InstanceType<typeof GradeWhereInput>;
    data: InstanceType<typeof GradeUpdateWithoutClassesInput>;
}
export declare class GradeUpdateWithWhereUniqueWithoutSchoolInput {
    where: Prisma.AtLeast<GradeWhereUniqueInput, 'id'>;
    data: InstanceType<typeof GradeUpdateWithoutSchoolInput>;
}
export declare class GradeUpdateWithoutClassesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    level?: InstanceType<typeof EnumGradeLevelFieldUpdateOperationsInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutGradesNestedInput>;
}
export declare class GradeUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    level?: InstanceType<typeof EnumGradeLevelFieldUpdateOperationsInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutGradeNestedInput>;
}
export declare class GradeUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    level?: InstanceType<typeof EnumGradeLevelFieldUpdateOperationsInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutGradeNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutGradesNestedInput>;
}
export declare class GradeUpsertWithWhereUniqueWithoutSchoolInput {
    where: Prisma.AtLeast<GradeWhereUniqueInput, 'id'>;
    update: InstanceType<typeof GradeUpdateWithoutSchoolInput>;
    create: InstanceType<typeof GradeCreateWithoutSchoolInput>;
}
export declare class GradeUpsertWithoutClassesInput {
    update: InstanceType<typeof GradeUpdateWithoutClassesInput>;
    create: InstanceType<typeof GradeCreateWithoutClassesInput>;
    where?: InstanceType<typeof GradeWhereInput>;
}
export declare class GradeWhereUniqueInput {
    id?: string;
    AND?: Array<GradeWhereInput>;
    OR?: Array<GradeWhereInput>;
    NOT?: Array<GradeWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    level?: InstanceType<typeof EnumGradeLevelFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
    classes?: InstanceType<typeof ClassListRelationFilter>;
    school?: InstanceType<typeof SchoolRelationFilter>;
}
export declare class GradeWhereInput {
    AND?: Array<GradeWhereInput>;
    OR?: Array<GradeWhereInput>;
    NOT?: Array<GradeWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    level?: InstanceType<typeof EnumGradeLevelFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
    classes?: InstanceType<typeof ClassListRelationFilter>;
    school?: InstanceType<typeof SchoolRelationFilter>;
}
export declare class Grade {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    level: keyof typeof GradeLevel;
    schoolId: string;
    classes?: Array<Class>;
    school?: InstanceType<typeof School>;
    _count?: InstanceType<typeof GradeCount>;
}
export declare class UpdateManyGradeArgs {
    data: InstanceType<typeof GradeUpdateManyMutationInput>;
    where?: InstanceType<typeof GradeWhereInput>;
}
export declare class UpdateOneGradeArgs {
    data: InstanceType<typeof GradeUpdateInput>;
    where: Prisma.AtLeast<GradeWhereUniqueInput, 'id'>;
}
export declare class UpsertOneGradeArgs {
    where: Prisma.AtLeast<GradeWhereUniqueInput, 'id'>;
    create: InstanceType<typeof GradeCreateInput>;
    update: InstanceType<typeof GradeUpdateInput>;
}
export declare class AffectedRows {
    count: number;
}
export declare class BoolFieldUpdateOperationsInput {
    set?: boolean;
}
export declare class BoolFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolFilter>;
}
export declare class BoolWithAggregatesFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedBoolFilter>;
    _max?: InstanceType<typeof NestedBoolFilter>;
}
export declare class DateTimeFieldUpdateOperationsInput {
    set?: Date | string;
}
export declare class DateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class DateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class EnumChatActivityTypeFieldUpdateOperationsInput {
    set?: keyof typeof ChatActivityType;
}
export declare class EnumChatActivityTypeFilter {
    equals?: keyof typeof ChatActivityType;
    in?: Array<keyof typeof ChatActivityType>;
    notIn?: Array<keyof typeof ChatActivityType>;
    not?: InstanceType<typeof NestedEnumChatActivityTypeFilter>;
}
export declare class EnumChatActivityTypeWithAggregatesFilter {
    equals?: keyof typeof ChatActivityType;
    in?: Array<keyof typeof ChatActivityType>;
    notIn?: Array<keyof typeof ChatActivityType>;
    not?: InstanceType<typeof NestedEnumChatActivityTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumChatActivityTypeFilter>;
    _max?: InstanceType<typeof NestedEnumChatActivityTypeFilter>;
}
export declare class EnumDayNullableFilter {
    equals?: keyof typeof Day;
    in?: Array<keyof typeof Day>;
    notIn?: Array<keyof typeof Day>;
    not?: InstanceType<typeof NestedEnumDayNullableFilter>;
}
export declare class EnumDayNullableWithAggregatesFilter {
    equals?: keyof typeof Day;
    in?: Array<keyof typeof Day>;
    notIn?: Array<keyof typeof Day>;
    not?: InstanceType<typeof NestedEnumDayNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumDayNullableFilter>;
    _max?: InstanceType<typeof NestedEnumDayNullableFilter>;
}
export declare class EnumGradeLevelFieldUpdateOperationsInput {
    set?: keyof typeof GradeLevel;
}
export declare class EnumGradeLevelFilter {
    equals?: keyof typeof GradeLevel;
    in?: Array<keyof typeof GradeLevel>;
    notIn?: Array<keyof typeof GradeLevel>;
    not?: InstanceType<typeof NestedEnumGradeLevelFilter>;
}
export declare class EnumGradeLevelWithAggregatesFilter {
    equals?: keyof typeof GradeLevel;
    in?: Array<keyof typeof GradeLevel>;
    notIn?: Array<keyof typeof GradeLevel>;
    not?: InstanceType<typeof NestedEnumGradeLevelWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumGradeLevelFilter>;
    _max?: InstanceType<typeof NestedEnumGradeLevelFilter>;
}
export declare class EnumSubjectTypeFieldUpdateOperationsInput {
    set?: keyof typeof SubjectType;
}
export declare class EnumSubjectTypeFilter {
    equals?: keyof typeof SubjectType;
    in?: Array<keyof typeof SubjectType>;
    notIn?: Array<keyof typeof SubjectType>;
    not?: InstanceType<typeof NestedEnumSubjectTypeFilter>;
}
export declare class EnumSubjectTypeWithAggregatesFilter {
    equals?: keyof typeof SubjectType;
    in?: Array<keyof typeof SubjectType>;
    notIn?: Array<keyof typeof SubjectType>;
    not?: InstanceType<typeof NestedEnumSubjectTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumSubjectTypeFilter>;
    _max?: InstanceType<typeof NestedEnumSubjectTypeFilter>;
}
export declare class EnumUserTypeFieldUpdateOperationsInput {
    set?: keyof typeof UserType;
}
export declare class EnumUserTypeFilter {
    equals?: keyof typeof UserType;
    in?: Array<keyof typeof UserType>;
    notIn?: Array<keyof typeof UserType>;
    not?: InstanceType<typeof NestedEnumUserTypeFilter>;
}
export declare class EnumUserTypeWithAggregatesFilter {
    equals?: keyof typeof UserType;
    in?: Array<keyof typeof UserType>;
    notIn?: Array<keyof typeof UserType>;
    not?: InstanceType<typeof NestedEnumUserTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserTypeFilter>;
    _max?: InstanceType<typeof NestedEnumUserTypeFilter>;
}
export declare class IntFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class IntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class IntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedIntFilter>;
    _max?: InstanceType<typeof NestedIntFilter>;
}
export declare class JsonNullableListFilter {
    equals?: Array<any>;
    has?: any;
    hasEvery?: Array<any>;
    hasSome?: Array<any>;
    isEmpty?: boolean;
}
export declare class NestedBoolFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolFilter>;
}
export declare class NestedBoolWithAggregatesFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedBoolFilter>;
    _max?: InstanceType<typeof NestedBoolFilter>;
}
export declare class NestedDateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedDateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedEnumChatActivityTypeFilter {
    equals?: keyof typeof ChatActivityType;
    in?: Array<keyof typeof ChatActivityType>;
    notIn?: Array<keyof typeof ChatActivityType>;
    not?: InstanceType<typeof NestedEnumChatActivityTypeFilter>;
}
export declare class NestedEnumChatActivityTypeWithAggregatesFilter {
    equals?: keyof typeof ChatActivityType;
    in?: Array<keyof typeof ChatActivityType>;
    notIn?: Array<keyof typeof ChatActivityType>;
    not?: InstanceType<typeof NestedEnumChatActivityTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumChatActivityTypeFilter>;
    _max?: InstanceType<typeof NestedEnumChatActivityTypeFilter>;
}
export declare class NestedEnumDayNullableFilter {
    equals?: keyof typeof Day;
    in?: Array<keyof typeof Day>;
    notIn?: Array<keyof typeof Day>;
    not?: InstanceType<typeof NestedEnumDayNullableFilter>;
}
export declare class NestedEnumDayNullableWithAggregatesFilter {
    equals?: keyof typeof Day;
    in?: Array<keyof typeof Day>;
    notIn?: Array<keyof typeof Day>;
    not?: InstanceType<typeof NestedEnumDayNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumDayNullableFilter>;
    _max?: InstanceType<typeof NestedEnumDayNullableFilter>;
}
export declare class NestedEnumGradeLevelFilter {
    equals?: keyof typeof GradeLevel;
    in?: Array<keyof typeof GradeLevel>;
    notIn?: Array<keyof typeof GradeLevel>;
    not?: InstanceType<typeof NestedEnumGradeLevelFilter>;
}
export declare class NestedEnumGradeLevelWithAggregatesFilter {
    equals?: keyof typeof GradeLevel;
    in?: Array<keyof typeof GradeLevel>;
    notIn?: Array<keyof typeof GradeLevel>;
    not?: InstanceType<typeof NestedEnumGradeLevelWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumGradeLevelFilter>;
    _max?: InstanceType<typeof NestedEnumGradeLevelFilter>;
}
export declare class NestedEnumSubjectTypeFilter {
    equals?: keyof typeof SubjectType;
    in?: Array<keyof typeof SubjectType>;
    notIn?: Array<keyof typeof SubjectType>;
    not?: InstanceType<typeof NestedEnumSubjectTypeFilter>;
}
export declare class NestedEnumSubjectTypeWithAggregatesFilter {
    equals?: keyof typeof SubjectType;
    in?: Array<keyof typeof SubjectType>;
    notIn?: Array<keyof typeof SubjectType>;
    not?: InstanceType<typeof NestedEnumSubjectTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumSubjectTypeFilter>;
    _max?: InstanceType<typeof NestedEnumSubjectTypeFilter>;
}
export declare class NestedEnumUserTypeFilter {
    equals?: keyof typeof UserType;
    in?: Array<keyof typeof UserType>;
    notIn?: Array<keyof typeof UserType>;
    not?: InstanceType<typeof NestedEnumUserTypeFilter>;
}
export declare class NestedEnumUserTypeWithAggregatesFilter {
    equals?: keyof typeof UserType;
    in?: Array<keyof typeof UserType>;
    notIn?: Array<keyof typeof UserType>;
    not?: InstanceType<typeof NestedEnumUserTypeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserTypeFilter>;
    _max?: InstanceType<typeof NestedEnumUserTypeFilter>;
}
export declare class NestedFloatFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatFilter>;
}
export declare class NestedIntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedIntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class NestedIntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedIntFilter>;
    _max?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedStringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class NestedStringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class NestedUuidFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    not?: InstanceType<typeof NestedUuidFilter>;
}
export declare class NestedUuidNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    not?: InstanceType<typeof NestedUuidNullableFilter>;
}
export declare class NestedUuidNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    not?: InstanceType<typeof NestedUuidNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedUuidWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    not?: InstanceType<typeof NestedUuidWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class NullableEnumDayFieldUpdateOperationsInput {
    set?: keyof typeof Day;
}
export declare class NullableStringFieldUpdateOperationsInput {
    set?: string;
}
export declare class SortOrderInput {
    sort: keyof typeof SortOrder;
    nulls?: keyof typeof NullsOrder;
}
export declare class StringFieldUpdateOperationsInput {
    set?: string;
}
export declare class StringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class StringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class UuidFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedUuidFilter>;
}
export declare class UuidNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedUuidNullableFilter>;
}
export declare class UuidNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedUuidNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class UuidWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedUuidWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class AggregateSchool {
    _count?: InstanceType<typeof SchoolCountAggregate>;
    _min?: InstanceType<typeof SchoolMinAggregate>;
    _max?: InstanceType<typeof SchoolMaxAggregate>;
}
export declare class CreateManySchoolArgs {
    data: Array<SchoolCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneSchoolArgs {
    data: InstanceType<typeof SchoolCreateInput>;
}
export declare class DeleteManySchoolArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class DeleteOneSchoolArgs {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
}
export declare class FindFirstSchoolOrThrowArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
    orderBy?: Array<SchoolOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SchoolScalarFieldEnum>;
}
export declare class FindFirstSchoolArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
    orderBy?: Array<SchoolOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SchoolScalarFieldEnum>;
}
export declare class FindManySchoolArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
    orderBy?: Array<SchoolOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SchoolScalarFieldEnum>;
}
export declare class FindUniqueSchoolOrThrowArgs {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
}
export declare class FindUniqueSchoolArgs {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
}
export declare class SchoolAggregateArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
    orderBy?: Array<SchoolOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SchoolCountAggregateInput>;
    _min?: InstanceType<typeof SchoolMinAggregateInput>;
    _max?: InstanceType<typeof SchoolMaxAggregateInput>;
}
export declare class SchoolCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    name?: true;
    setupAccountId?: true;
    _all?: true;
}
export declare class SchoolCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    name: number;
    setupAccountId: number;
    _all: number;
}
export declare class SchoolCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    setupAccountId?: keyof typeof SortOrder;
}
export declare class SchoolCount {
    blackboards?: number;
    classes?: number;
    clubs?: number;
    events?: number;
    grades?: number;
    members?: number;
    subjects?: number;
}
export declare class SchoolCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    setupAccountId: string;
}
export declare class SchoolCreateNestedManyWithoutMembersInput {
    create?: Array<SchoolCreateWithoutMembersInput>;
    connectOrCreate?: Array<SchoolCreateOrConnectWithoutMembersInput>;
    connect?: Array<Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>>;
}
export declare class SchoolCreateNestedOneWithoutBlackboardsInput {
    create?: InstanceType<typeof SchoolCreateWithoutBlackboardsInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutBlackboardsInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
}
export declare class SchoolCreateNestedOneWithoutClassesInput {
    create?: InstanceType<typeof SchoolCreateWithoutClassesInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutClassesInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
}
export declare class SchoolCreateNestedOneWithoutClubsInput {
    create?: InstanceType<typeof SchoolCreateWithoutClubsInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutClubsInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
}
export declare class SchoolCreateNestedOneWithoutEventsInput {
    create?: InstanceType<typeof SchoolCreateWithoutEventsInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutEventsInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
}
export declare class SchoolCreateNestedOneWithoutGradesInput {
    create?: InstanceType<typeof SchoolCreateWithoutGradesInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutGradesInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
}
export declare class SchoolCreateNestedOneWithoutSetupAccountInput {
    create?: InstanceType<typeof SchoolCreateWithoutSetupAccountInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutSetupAccountInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
}
export declare class SchoolCreateNestedOneWithoutSubjectsInput {
    create?: InstanceType<typeof SchoolCreateWithoutSubjectsInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutSubjectsInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
}
export declare class SchoolCreateOrConnectWithoutBlackboardsInput {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    create: InstanceType<typeof SchoolCreateWithoutBlackboardsInput>;
}
export declare class SchoolCreateOrConnectWithoutClassesInput {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    create: InstanceType<typeof SchoolCreateWithoutClassesInput>;
}
export declare class SchoolCreateOrConnectWithoutClubsInput {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    create: InstanceType<typeof SchoolCreateWithoutClubsInput>;
}
export declare class SchoolCreateOrConnectWithoutEventsInput {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    create: InstanceType<typeof SchoolCreateWithoutEventsInput>;
}
export declare class SchoolCreateOrConnectWithoutGradesInput {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    create: InstanceType<typeof SchoolCreateWithoutGradesInput>;
}
export declare class SchoolCreateOrConnectWithoutMembersInput {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    create: InstanceType<typeof SchoolCreateWithoutMembersInput>;
}
export declare class SchoolCreateOrConnectWithoutSetupAccountInput {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    create: InstanceType<typeof SchoolCreateWithoutSetupAccountInput>;
}
export declare class SchoolCreateOrConnectWithoutSubjectsInput {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    create: InstanceType<typeof SchoolCreateWithoutSubjectsInput>;
}
export declare class SchoolCreateWithoutBlackboardsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutSchoolInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutSchoolInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSchoolInput>;
    grades?: InstanceType<typeof GradeCreateNestedManyWithoutSchoolInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutSchoolsInput>;
    setupAccount: InstanceType<typeof SetupAccountCreateNestedOneWithoutSchoolInput>;
    subjects?: InstanceType<typeof SubjectCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolCreateWithoutClassesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutSchoolInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutSchoolInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSchoolInput>;
    grades?: InstanceType<typeof GradeCreateNestedManyWithoutSchoolInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutSchoolsInput>;
    setupAccount: InstanceType<typeof SetupAccountCreateNestedOneWithoutSchoolInput>;
    subjects?: InstanceType<typeof SubjectCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolCreateWithoutClubsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutSchoolInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutSchoolInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSchoolInput>;
    grades?: InstanceType<typeof GradeCreateNestedManyWithoutSchoolInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutSchoolsInput>;
    setupAccount: InstanceType<typeof SetupAccountCreateNestedOneWithoutSchoolInput>;
    subjects?: InstanceType<typeof SubjectCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolCreateWithoutEventsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutSchoolInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutSchoolInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutSchoolInput>;
    grades?: InstanceType<typeof GradeCreateNestedManyWithoutSchoolInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutSchoolsInput>;
    setupAccount: InstanceType<typeof SetupAccountCreateNestedOneWithoutSchoolInput>;
    subjects?: InstanceType<typeof SubjectCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolCreateWithoutGradesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutSchoolInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutSchoolInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutSchoolInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSchoolInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutSchoolsInput>;
    setupAccount: InstanceType<typeof SetupAccountCreateNestedOneWithoutSchoolInput>;
    subjects?: InstanceType<typeof SubjectCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolCreateWithoutMembersInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutSchoolInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutSchoolInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutSchoolInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSchoolInput>;
    grades?: InstanceType<typeof GradeCreateNestedManyWithoutSchoolInput>;
    setupAccount: InstanceType<typeof SetupAccountCreateNestedOneWithoutSchoolInput>;
    subjects?: InstanceType<typeof SubjectCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolCreateWithoutSetupAccountInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutSchoolInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutSchoolInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutSchoolInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSchoolInput>;
    grades?: InstanceType<typeof GradeCreateNestedManyWithoutSchoolInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutSchoolsInput>;
    subjects?: InstanceType<typeof SubjectCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolCreateWithoutSubjectsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutSchoolInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutSchoolInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutSchoolInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSchoolInput>;
    grades?: InstanceType<typeof GradeCreateNestedManyWithoutSchoolInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutSchoolsInput>;
    setupAccount: InstanceType<typeof SetupAccountCreateNestedOneWithoutSchoolInput>;
}
export declare class SchoolCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutSchoolInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutSchoolInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutSchoolInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSchoolInput>;
    grades?: InstanceType<typeof GradeCreateNestedManyWithoutSchoolInput>;
    members?: InstanceType<typeof UserCreateNestedManyWithoutSchoolsInput>;
    setupAccount: InstanceType<typeof SetupAccountCreateNestedOneWithoutSchoolInput>;
    subjects?: InstanceType<typeof SubjectCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolGroupByArgs {
    where?: InstanceType<typeof SchoolWhereInput>;
    orderBy?: Array<SchoolOrderByWithAggregationInput>;
    by: Array<keyof typeof SchoolScalarFieldEnum>;
    having?: InstanceType<typeof SchoolScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SchoolCountAggregateInput>;
    _min?: InstanceType<typeof SchoolMinAggregateInput>;
    _max?: InstanceType<typeof SchoolMaxAggregateInput>;
}
export declare class SchoolGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    name: string;
    setupAccountId: string;
    _count?: InstanceType<typeof SchoolCountAggregate>;
    _min?: InstanceType<typeof SchoolMinAggregate>;
    _max?: InstanceType<typeof SchoolMaxAggregate>;
}
export declare class SchoolListRelationFilter {
    every?: InstanceType<typeof SchoolWhereInput>;
    some?: InstanceType<typeof SchoolWhereInput>;
    none?: InstanceType<typeof SchoolWhereInput>;
}
export declare class SchoolMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    name?: true;
    setupAccountId?: true;
}
export declare class SchoolMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name?: string;
    setupAccountId?: string;
}
export declare class SchoolMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    setupAccountId?: keyof typeof SortOrder;
}
export declare class SchoolMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    name?: true;
    setupAccountId?: true;
}
export declare class SchoolMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name?: string;
    setupAccountId?: string;
}
export declare class SchoolMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    setupAccountId?: keyof typeof SortOrder;
}
export declare class SchoolNullableRelationFilter {
    is?: InstanceType<typeof SchoolWhereInput>;
    isNot?: InstanceType<typeof SchoolWhereInput>;
}
export declare class SchoolOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class SchoolOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    setupAccountId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof SchoolCountOrderByAggregateInput>;
    _max?: InstanceType<typeof SchoolMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof SchoolMinOrderByAggregateInput>;
}
export declare class SchoolOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    setupAccountId?: keyof typeof SortOrder;
    blackboards?: InstanceType<typeof BlackboardOrderByRelationAggregateInput>;
    classes?: InstanceType<typeof ClassOrderByRelationAggregateInput>;
    clubs?: InstanceType<typeof ClubOrderByRelationAggregateInput>;
    events?: InstanceType<typeof EventOrderByRelationAggregateInput>;
    grades?: InstanceType<typeof GradeOrderByRelationAggregateInput>;
    members?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    setupAccount?: InstanceType<typeof SetupAccountOrderByWithRelationInput>;
    subjects?: InstanceType<typeof SubjectOrderByRelationAggregateInput>;
}
export declare class SchoolRelationFilter {
    is?: InstanceType<typeof SchoolWhereInput>;
    isNot?: InstanceType<typeof SchoolWhereInput>;
}
export declare class SchoolScalarWhereWithAggregatesInput {
    AND?: Array<SchoolScalarWhereWithAggregatesInput>;
    OR?: Array<SchoolScalarWhereWithAggregatesInput>;
    NOT?: Array<SchoolScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    setupAccountId?: InstanceType<typeof UuidWithAggregatesFilter>;
}
export declare class SchoolScalarWhereInput {
    AND?: Array<SchoolScalarWhereInput>;
    OR?: Array<SchoolScalarWhereInput>;
    NOT?: Array<SchoolScalarWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    name?: InstanceType<typeof StringFilter>;
    setupAccountId?: InstanceType<typeof UuidFilter>;
}
export declare class SchoolUncheckedCreateNestedManyWithoutMembersInput {
    create?: Array<SchoolCreateWithoutMembersInput>;
    connectOrCreate?: Array<SchoolCreateOrConnectWithoutMembersInput>;
    connect?: Array<Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>>;
}
export declare class SchoolUncheckedCreateNestedOneWithoutSetupAccountInput {
    create?: InstanceType<typeof SchoolCreateWithoutSetupAccountInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutSetupAccountInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
}
export declare class SchoolUncheckedCreateWithoutBlackboardsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    setupAccountId: string;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutSchoolInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutSchoolInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSchoolInput>;
    grades?: InstanceType<typeof GradeUncheckedCreateNestedManyWithoutSchoolInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutSchoolsInput>;
    subjects?: InstanceType<typeof SubjectUncheckedCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolUncheckedCreateWithoutClassesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    setupAccountId: string;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutSchoolInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutSchoolInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSchoolInput>;
    grades?: InstanceType<typeof GradeUncheckedCreateNestedManyWithoutSchoolInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutSchoolsInput>;
    subjects?: InstanceType<typeof SubjectUncheckedCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolUncheckedCreateWithoutClubsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    setupAccountId: string;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutSchoolInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutSchoolInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSchoolInput>;
    grades?: InstanceType<typeof GradeUncheckedCreateNestedManyWithoutSchoolInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutSchoolsInput>;
    subjects?: InstanceType<typeof SubjectUncheckedCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolUncheckedCreateWithoutEventsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    setupAccountId: string;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutSchoolInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutSchoolInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutSchoolInput>;
    grades?: InstanceType<typeof GradeUncheckedCreateNestedManyWithoutSchoolInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutSchoolsInput>;
    subjects?: InstanceType<typeof SubjectUncheckedCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolUncheckedCreateWithoutGradesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    setupAccountId: string;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutSchoolInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutSchoolInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutSchoolInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSchoolInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutSchoolsInput>;
    subjects?: InstanceType<typeof SubjectUncheckedCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolUncheckedCreateWithoutMembersInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    setupAccountId: string;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutSchoolInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutSchoolInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutSchoolInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSchoolInput>;
    grades?: InstanceType<typeof GradeUncheckedCreateNestedManyWithoutSchoolInput>;
    subjects?: InstanceType<typeof SubjectUncheckedCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolUncheckedCreateWithoutSetupAccountInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutSchoolInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutSchoolInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutSchoolInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSchoolInput>;
    grades?: InstanceType<typeof GradeUncheckedCreateNestedManyWithoutSchoolInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutSchoolsInput>;
    subjects?: InstanceType<typeof SubjectUncheckedCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolUncheckedCreateWithoutSubjectsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    setupAccountId: string;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutSchoolInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutSchoolInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutSchoolInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSchoolInput>;
    grades?: InstanceType<typeof GradeUncheckedCreateNestedManyWithoutSchoolInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutSchoolsInput>;
}
export declare class SchoolUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name: string;
    setupAccountId: string;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutSchoolInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutSchoolInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutSchoolInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSchoolInput>;
    grades?: InstanceType<typeof GradeUncheckedCreateNestedManyWithoutSchoolInput>;
    members?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutSchoolsInput>;
    subjects?: InstanceType<typeof SubjectUncheckedCreateNestedManyWithoutSchoolInput>;
}
export declare class SchoolUncheckedUpdateManyWithoutMembersNestedInput {
    create?: Array<SchoolCreateWithoutMembersInput>;
    connectOrCreate?: Array<SchoolCreateOrConnectWithoutMembersInput>;
    upsert?: Array<SchoolUpsertWithWhereUniqueWithoutMembersInput>;
    set?: Array<Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>>;
    delete?: Array<Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>>;
    connect?: Array<Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>>;
    update?: Array<SchoolUpdateWithWhereUniqueWithoutMembersInput>;
    updateMany?: Array<SchoolUpdateManyWithWhereWithoutMembersInput>;
    deleteMany?: Array<SchoolScalarWhereInput>;
}
export declare class SchoolUncheckedUpdateManyWithoutMembersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    setupAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class SchoolUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    setupAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class SchoolUncheckedUpdateOneWithoutSetupAccountNestedInput {
    create?: InstanceType<typeof SchoolCreateWithoutSetupAccountInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutSetupAccountInput>;
    upsert?: InstanceType<typeof SchoolUpsertWithoutSetupAccountInput>;
    disconnect?: InstanceType<typeof SchoolWhereInput>;
    delete?: InstanceType<typeof SchoolWhereInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    update?: InstanceType<typeof SchoolUpdateToOneWithWhereWithoutSetupAccountInput>;
}
export declare class SchoolUncheckedUpdateWithoutBlackboardsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    setupAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutSchoolNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutSchoolNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSchoolNestedInput>;
    grades?: InstanceType<typeof GradeUncheckedUpdateManyWithoutSchoolNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutSchoolsNestedInput>;
    subjects?: InstanceType<typeof SubjectUncheckedUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUncheckedUpdateWithoutClassesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    setupAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutSchoolNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutSchoolNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSchoolNestedInput>;
    grades?: InstanceType<typeof GradeUncheckedUpdateManyWithoutSchoolNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutSchoolsNestedInput>;
    subjects?: InstanceType<typeof SubjectUncheckedUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUncheckedUpdateWithoutClubsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    setupAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutSchoolNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutSchoolNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSchoolNestedInput>;
    grades?: InstanceType<typeof GradeUncheckedUpdateManyWithoutSchoolNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutSchoolsNestedInput>;
    subjects?: InstanceType<typeof SubjectUncheckedUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUncheckedUpdateWithoutEventsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    setupAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutSchoolNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutSchoolNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutSchoolNestedInput>;
    grades?: InstanceType<typeof GradeUncheckedUpdateManyWithoutSchoolNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutSchoolsNestedInput>;
    subjects?: InstanceType<typeof SubjectUncheckedUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUncheckedUpdateWithoutGradesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    setupAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutSchoolNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutSchoolNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutSchoolNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSchoolNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutSchoolsNestedInput>;
    subjects?: InstanceType<typeof SubjectUncheckedUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUncheckedUpdateWithoutMembersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    setupAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutSchoolNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutSchoolNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutSchoolNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSchoolNestedInput>;
    grades?: InstanceType<typeof GradeUncheckedUpdateManyWithoutSchoolNestedInput>;
    subjects?: InstanceType<typeof SubjectUncheckedUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUncheckedUpdateWithoutSetupAccountInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutSchoolNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutSchoolNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutSchoolNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSchoolNestedInput>;
    grades?: InstanceType<typeof GradeUncheckedUpdateManyWithoutSchoolNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutSchoolsNestedInput>;
    subjects?: InstanceType<typeof SubjectUncheckedUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUncheckedUpdateWithoutSubjectsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    setupAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutSchoolNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutSchoolNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutSchoolNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSchoolNestedInput>;
    grades?: InstanceType<typeof GradeUncheckedUpdateManyWithoutSchoolNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutSchoolsNestedInput>;
}
export declare class SchoolUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    setupAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutSchoolNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutSchoolNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutSchoolNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSchoolNestedInput>;
    grades?: InstanceType<typeof GradeUncheckedUpdateManyWithoutSchoolNestedInput>;
    members?: InstanceType<typeof UserUncheckedUpdateManyWithoutSchoolsNestedInput>;
    subjects?: InstanceType<typeof SubjectUncheckedUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class SchoolUpdateManyWithWhereWithoutMembersInput {
    where: InstanceType<typeof SchoolScalarWhereInput>;
    data: InstanceType<typeof SchoolUpdateManyMutationInput>;
}
export declare class SchoolUpdateManyWithoutMembersNestedInput {
    create?: Array<SchoolCreateWithoutMembersInput>;
    connectOrCreate?: Array<SchoolCreateOrConnectWithoutMembersInput>;
    upsert?: Array<SchoolUpsertWithWhereUniqueWithoutMembersInput>;
    set?: Array<Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>>;
    delete?: Array<Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>>;
    connect?: Array<Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>>;
    update?: Array<SchoolUpdateWithWhereUniqueWithoutMembersInput>;
    updateMany?: Array<SchoolUpdateManyWithWhereWithoutMembersInput>;
    deleteMany?: Array<SchoolScalarWhereInput>;
}
export declare class SchoolUpdateOneRequiredWithoutBlackboardsNestedInput {
    create?: InstanceType<typeof SchoolCreateWithoutBlackboardsInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutBlackboardsInput>;
    upsert?: InstanceType<typeof SchoolUpsertWithoutBlackboardsInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    update?: InstanceType<typeof SchoolUpdateToOneWithWhereWithoutBlackboardsInput>;
}
export declare class SchoolUpdateOneRequiredWithoutClassesNestedInput {
    create?: InstanceType<typeof SchoolCreateWithoutClassesInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutClassesInput>;
    upsert?: InstanceType<typeof SchoolUpsertWithoutClassesInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    update?: InstanceType<typeof SchoolUpdateToOneWithWhereWithoutClassesInput>;
}
export declare class SchoolUpdateOneRequiredWithoutClubsNestedInput {
    create?: InstanceType<typeof SchoolCreateWithoutClubsInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutClubsInput>;
    upsert?: InstanceType<typeof SchoolUpsertWithoutClubsInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    update?: InstanceType<typeof SchoolUpdateToOneWithWhereWithoutClubsInput>;
}
export declare class SchoolUpdateOneRequiredWithoutEventsNestedInput {
    create?: InstanceType<typeof SchoolCreateWithoutEventsInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutEventsInput>;
    upsert?: InstanceType<typeof SchoolUpsertWithoutEventsInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    update?: InstanceType<typeof SchoolUpdateToOneWithWhereWithoutEventsInput>;
}
export declare class SchoolUpdateOneRequiredWithoutGradesNestedInput {
    create?: InstanceType<typeof SchoolCreateWithoutGradesInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutGradesInput>;
    upsert?: InstanceType<typeof SchoolUpsertWithoutGradesInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    update?: InstanceType<typeof SchoolUpdateToOneWithWhereWithoutGradesInput>;
}
export declare class SchoolUpdateOneRequiredWithoutSubjectsNestedInput {
    create?: InstanceType<typeof SchoolCreateWithoutSubjectsInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutSubjectsInput>;
    upsert?: InstanceType<typeof SchoolUpsertWithoutSubjectsInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    update?: InstanceType<typeof SchoolUpdateToOneWithWhereWithoutSubjectsInput>;
}
export declare class SchoolUpdateOneWithoutSetupAccountNestedInput {
    create?: InstanceType<typeof SchoolCreateWithoutSetupAccountInput>;
    connectOrCreate?: InstanceType<typeof SchoolCreateOrConnectWithoutSetupAccountInput>;
    upsert?: InstanceType<typeof SchoolUpsertWithoutSetupAccountInput>;
    disconnect?: InstanceType<typeof SchoolWhereInput>;
    delete?: InstanceType<typeof SchoolWhereInput>;
    connect?: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    update?: InstanceType<typeof SchoolUpdateToOneWithWhereWithoutSetupAccountInput>;
}
export declare class SchoolUpdateToOneWithWhereWithoutBlackboardsInput {
    where?: InstanceType<typeof SchoolWhereInput>;
    data: InstanceType<typeof SchoolUpdateWithoutBlackboardsInput>;
}
export declare class SchoolUpdateToOneWithWhereWithoutClassesInput {
    where?: InstanceType<typeof SchoolWhereInput>;
    data: InstanceType<typeof SchoolUpdateWithoutClassesInput>;
}
export declare class SchoolUpdateToOneWithWhereWithoutClubsInput {
    where?: InstanceType<typeof SchoolWhereInput>;
    data: InstanceType<typeof SchoolUpdateWithoutClubsInput>;
}
export declare class SchoolUpdateToOneWithWhereWithoutEventsInput {
    where?: InstanceType<typeof SchoolWhereInput>;
    data: InstanceType<typeof SchoolUpdateWithoutEventsInput>;
}
export declare class SchoolUpdateToOneWithWhereWithoutGradesInput {
    where?: InstanceType<typeof SchoolWhereInput>;
    data: InstanceType<typeof SchoolUpdateWithoutGradesInput>;
}
export declare class SchoolUpdateToOneWithWhereWithoutSetupAccountInput {
    where?: InstanceType<typeof SchoolWhereInput>;
    data: InstanceType<typeof SchoolUpdateWithoutSetupAccountInput>;
}
export declare class SchoolUpdateToOneWithWhereWithoutSubjectsInput {
    where?: InstanceType<typeof SchoolWhereInput>;
    data: InstanceType<typeof SchoolUpdateWithoutSubjectsInput>;
}
export declare class SchoolUpdateWithWhereUniqueWithoutMembersInput {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    data: InstanceType<typeof SchoolUpdateWithoutMembersInput>;
}
export declare class SchoolUpdateWithoutBlackboardsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutSchoolNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutSchoolNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSchoolNestedInput>;
    grades?: InstanceType<typeof GradeUpdateManyWithoutSchoolNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutSchoolsNestedInput>;
    setupAccount?: InstanceType<typeof SetupAccountUpdateOneRequiredWithoutSchoolNestedInput>;
    subjects?: InstanceType<typeof SubjectUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUpdateWithoutClassesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutSchoolNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutSchoolNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSchoolNestedInput>;
    grades?: InstanceType<typeof GradeUpdateManyWithoutSchoolNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutSchoolsNestedInput>;
    setupAccount?: InstanceType<typeof SetupAccountUpdateOneRequiredWithoutSchoolNestedInput>;
    subjects?: InstanceType<typeof SubjectUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUpdateWithoutClubsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutSchoolNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutSchoolNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSchoolNestedInput>;
    grades?: InstanceType<typeof GradeUpdateManyWithoutSchoolNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutSchoolsNestedInput>;
    setupAccount?: InstanceType<typeof SetupAccountUpdateOneRequiredWithoutSchoolNestedInput>;
    subjects?: InstanceType<typeof SubjectUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUpdateWithoutEventsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutSchoolNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutSchoolNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutSchoolNestedInput>;
    grades?: InstanceType<typeof GradeUpdateManyWithoutSchoolNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutSchoolsNestedInput>;
    setupAccount?: InstanceType<typeof SetupAccountUpdateOneRequiredWithoutSchoolNestedInput>;
    subjects?: InstanceType<typeof SubjectUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUpdateWithoutGradesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutSchoolNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutSchoolNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutSchoolNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSchoolNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutSchoolsNestedInput>;
    setupAccount?: InstanceType<typeof SetupAccountUpdateOneRequiredWithoutSchoolNestedInput>;
    subjects?: InstanceType<typeof SubjectUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUpdateWithoutMembersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutSchoolNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutSchoolNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutSchoolNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSchoolNestedInput>;
    grades?: InstanceType<typeof GradeUpdateManyWithoutSchoolNestedInput>;
    setupAccount?: InstanceType<typeof SetupAccountUpdateOneRequiredWithoutSchoolNestedInput>;
    subjects?: InstanceType<typeof SubjectUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUpdateWithoutSetupAccountInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutSchoolNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutSchoolNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutSchoolNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSchoolNestedInput>;
    grades?: InstanceType<typeof GradeUpdateManyWithoutSchoolNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutSchoolsNestedInput>;
    subjects?: InstanceType<typeof SubjectUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUpdateWithoutSubjectsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutSchoolNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutSchoolNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutSchoolNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSchoolNestedInput>;
    grades?: InstanceType<typeof GradeUpdateManyWithoutSchoolNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutSchoolsNestedInput>;
    setupAccount?: InstanceType<typeof SetupAccountUpdateOneRequiredWithoutSchoolNestedInput>;
}
export declare class SchoolUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutSchoolNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutSchoolNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutSchoolNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSchoolNestedInput>;
    grades?: InstanceType<typeof GradeUpdateManyWithoutSchoolNestedInput>;
    members?: InstanceType<typeof UserUpdateManyWithoutSchoolsNestedInput>;
    setupAccount?: InstanceType<typeof SetupAccountUpdateOneRequiredWithoutSchoolNestedInput>;
    subjects?: InstanceType<typeof SubjectUpdateManyWithoutSchoolNestedInput>;
}
export declare class SchoolUpsertWithWhereUniqueWithoutMembersInput {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    update: InstanceType<typeof SchoolUpdateWithoutMembersInput>;
    create: InstanceType<typeof SchoolCreateWithoutMembersInput>;
}
export declare class SchoolUpsertWithoutBlackboardsInput {
    update: InstanceType<typeof SchoolUpdateWithoutBlackboardsInput>;
    create: InstanceType<typeof SchoolCreateWithoutBlackboardsInput>;
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class SchoolUpsertWithoutClassesInput {
    update: InstanceType<typeof SchoolUpdateWithoutClassesInput>;
    create: InstanceType<typeof SchoolCreateWithoutClassesInput>;
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class SchoolUpsertWithoutClubsInput {
    update: InstanceType<typeof SchoolUpdateWithoutClubsInput>;
    create: InstanceType<typeof SchoolCreateWithoutClubsInput>;
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class SchoolUpsertWithoutEventsInput {
    update: InstanceType<typeof SchoolUpdateWithoutEventsInput>;
    create: InstanceType<typeof SchoolCreateWithoutEventsInput>;
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class SchoolUpsertWithoutGradesInput {
    update: InstanceType<typeof SchoolUpdateWithoutGradesInput>;
    create: InstanceType<typeof SchoolCreateWithoutGradesInput>;
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class SchoolUpsertWithoutSetupAccountInput {
    update: InstanceType<typeof SchoolUpdateWithoutSetupAccountInput>;
    create: InstanceType<typeof SchoolCreateWithoutSetupAccountInput>;
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class SchoolUpsertWithoutSubjectsInput {
    update: InstanceType<typeof SchoolUpdateWithoutSubjectsInput>;
    create: InstanceType<typeof SchoolCreateWithoutSubjectsInput>;
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class SchoolWhereUniqueInput {
    id?: string;
    name?: string;
    setupAccountId?: string;
    AND?: Array<SchoolWhereInput>;
    OR?: Array<SchoolWhereInput>;
    NOT?: Array<SchoolWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    blackboards?: InstanceType<typeof BlackboardListRelationFilter>;
    classes?: InstanceType<typeof ClassListRelationFilter>;
    clubs?: InstanceType<typeof ClubListRelationFilter>;
    events?: InstanceType<typeof EventListRelationFilter>;
    grades?: InstanceType<typeof GradeListRelationFilter>;
    members?: InstanceType<typeof UserListRelationFilter>;
    setupAccount?: InstanceType<typeof SetupAccountRelationFilter>;
    subjects?: InstanceType<typeof SubjectListRelationFilter>;
}
export declare class SchoolWhereInput {
    AND?: Array<SchoolWhereInput>;
    OR?: Array<SchoolWhereInput>;
    NOT?: Array<SchoolWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    name?: InstanceType<typeof StringFilter>;
    setupAccountId?: InstanceType<typeof UuidFilter>;
    blackboards?: InstanceType<typeof BlackboardListRelationFilter>;
    classes?: InstanceType<typeof ClassListRelationFilter>;
    clubs?: InstanceType<typeof ClubListRelationFilter>;
    events?: InstanceType<typeof EventListRelationFilter>;
    grades?: InstanceType<typeof GradeListRelationFilter>;
    members?: InstanceType<typeof UserListRelationFilter>;
    setupAccount?: InstanceType<typeof SetupAccountRelationFilter>;
    subjects?: InstanceType<typeof SubjectListRelationFilter>;
}
export declare class School {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    setupAccountId: string;
    blackboards?: Array<Blackboard>;
    classes?: Array<Class>;
    clubs?: Array<Club>;
    events?: Array<Event>;
    grades?: Array<Grade>;
    members?: Array<User>;
    setupAccount?: InstanceType<typeof SetupAccount>;
    subjects?: Array<Subject>;
    _count?: InstanceType<typeof SchoolCount>;
}
export declare class UpdateManySchoolArgs {
    data: InstanceType<typeof SchoolUpdateManyMutationInput>;
    where?: InstanceType<typeof SchoolWhereInput>;
}
export declare class UpdateOneSchoolArgs {
    data: InstanceType<typeof SchoolUpdateInput>;
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
}
export declare class UpsertOneSchoolArgs {
    where: Prisma.AtLeast<SchoolWhereUniqueInput, 'id' | 'name' | 'setupAccountId'>;
    create: InstanceType<typeof SchoolCreateInput>;
    update: InstanceType<typeof SchoolUpdateInput>;
}
export declare class AggregateSetupAccount {
    _count?: InstanceType<typeof SetupAccountCountAggregate>;
    _min?: InstanceType<typeof SetupAccountMinAggregate>;
    _max?: InstanceType<typeof SetupAccountMaxAggregate>;
}
export declare class CreateManySetupAccountArgs {
    data: Array<SetupAccountCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneSetupAccountArgs {
    data: InstanceType<typeof SetupAccountCreateInput>;
}
export declare class DeleteManySetupAccountArgs {
    where?: InstanceType<typeof SetupAccountWhereInput>;
}
export declare class DeleteOneSetupAccountArgs {
    where: Prisma.AtLeast<SetupAccountWhereUniqueInput, 'id' | 'schoolName'>;
}
export declare class FindFirstSetupAccountOrThrowArgs {
    where?: InstanceType<typeof SetupAccountWhereInput>;
    orderBy?: Array<SetupAccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SetupAccountWhereUniqueInput, 'id' | 'schoolName'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SetupAccountScalarFieldEnum>;
}
export declare class FindFirstSetupAccountArgs {
    where?: InstanceType<typeof SetupAccountWhereInput>;
    orderBy?: Array<SetupAccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SetupAccountWhereUniqueInput, 'id' | 'schoolName'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SetupAccountScalarFieldEnum>;
}
export declare class FindManySetupAccountArgs {
    where?: InstanceType<typeof SetupAccountWhereInput>;
    orderBy?: Array<SetupAccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SetupAccountWhereUniqueInput, 'id' | 'schoolName'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SetupAccountScalarFieldEnum>;
}
export declare class FindUniqueSetupAccountOrThrowArgs {
    where: Prisma.AtLeast<SetupAccountWhereUniqueInput, 'id' | 'schoolName'>;
}
export declare class FindUniqueSetupAccountArgs {
    where: Prisma.AtLeast<SetupAccountWhereUniqueInput, 'id' | 'schoolName'>;
}
export declare class SetupAccountAggregateArgs {
    where?: InstanceType<typeof SetupAccountWhereInput>;
    orderBy?: Array<SetupAccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SetupAccountWhereUniqueInput, 'id' | 'schoolName'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SetupAccountCountAggregateInput>;
    _min?: InstanceType<typeof SetupAccountMinAggregateInput>;
    _max?: InstanceType<typeof SetupAccountMaxAggregateInput>;
}
export declare class SetupAccountCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    schoolId?: true;
    schoolName?: true;
    _all?: true;
}
export declare class SetupAccountCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    schoolId: number;
    schoolName: number;
    _all: number;
}
export declare class SetupAccountCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    schoolName?: keyof typeof SortOrder;
}
export declare class SetupAccountCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schoolId?: string;
    schoolName: string;
}
export declare class SetupAccountCreateNestedOneWithoutSchoolInput {
    create?: InstanceType<typeof SetupAccountCreateWithoutSchoolInput>;
    connectOrCreate?: InstanceType<typeof SetupAccountCreateOrConnectWithoutSchoolInput>;
    connect?: Prisma.AtLeast<SetupAccountWhereUniqueInput, 'id' | 'schoolName'>;
}
export declare class SetupAccountCreateOrConnectWithoutSchoolInput {
    where: Prisma.AtLeast<SetupAccountWhereUniqueInput, 'id' | 'schoolName'>;
    create: InstanceType<typeof SetupAccountCreateWithoutSchoolInput>;
}
export declare class SetupAccountCreateWithoutSchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schoolId?: string;
    schoolName: string;
}
export declare class SetupAccountCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schoolId?: string;
    schoolName: string;
    school?: InstanceType<typeof SchoolCreateNestedOneWithoutSetupAccountInput>;
}
export declare class SetupAccountGroupByArgs {
    where?: InstanceType<typeof SetupAccountWhereInput>;
    orderBy?: Array<SetupAccountOrderByWithAggregationInput>;
    by: Array<keyof typeof SetupAccountScalarFieldEnum>;
    having?: InstanceType<typeof SetupAccountScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SetupAccountCountAggregateInput>;
    _min?: InstanceType<typeof SetupAccountMinAggregateInput>;
    _max?: InstanceType<typeof SetupAccountMaxAggregateInput>;
}
export declare class SetupAccountGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    schoolId?: string;
    schoolName: string;
    _count?: InstanceType<typeof SetupAccountCountAggregate>;
    _min?: InstanceType<typeof SetupAccountMinAggregate>;
    _max?: InstanceType<typeof SetupAccountMaxAggregate>;
}
export declare class SetupAccountMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    schoolId?: true;
    schoolName?: true;
}
export declare class SetupAccountMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schoolId?: string;
    schoolName?: string;
}
export declare class SetupAccountMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    schoolName?: keyof typeof SortOrder;
}
export declare class SetupAccountMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    schoolId?: true;
    schoolName?: true;
}
export declare class SetupAccountMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schoolId?: string;
    schoolName?: string;
}
export declare class SetupAccountMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    schoolName?: keyof typeof SortOrder;
}
export declare class SetupAccountOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    schoolId?: InstanceType<typeof SortOrderInput>;
    schoolName?: keyof typeof SortOrder;
    _count?: InstanceType<typeof SetupAccountCountOrderByAggregateInput>;
    _max?: InstanceType<typeof SetupAccountMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof SetupAccountMinOrderByAggregateInput>;
}
export declare class SetupAccountOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    schoolId?: InstanceType<typeof SortOrderInput>;
    schoolName?: keyof typeof SortOrder;
    school?: InstanceType<typeof SchoolOrderByWithRelationInput>;
}
export declare class SetupAccountRelationFilter {
    is?: InstanceType<typeof SetupAccountWhereInput>;
    isNot?: InstanceType<typeof SetupAccountWhereInput>;
}
export declare class SetupAccountScalarWhereWithAggregatesInput {
    AND?: Array<SetupAccountScalarWhereWithAggregatesInput>;
    OR?: Array<SetupAccountScalarWhereWithAggregatesInput>;
    NOT?: Array<SetupAccountScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    schoolId?: InstanceType<typeof UuidNullableWithAggregatesFilter>;
    schoolName?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class SetupAccountUncheckedCreateWithoutSchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schoolId?: string;
    schoolName: string;
}
export declare class SetupAccountUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schoolId?: string;
    schoolName: string;
    school?: InstanceType<typeof SchoolUncheckedCreateNestedOneWithoutSetupAccountInput>;
}
export declare class SetupAccountUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class SetupAccountUncheckedUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class SetupAccountUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    school?: InstanceType<typeof SchoolUncheckedUpdateOneWithoutSetupAccountNestedInput>;
}
export declare class SetupAccountUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class SetupAccountUpdateOneRequiredWithoutSchoolNestedInput {
    create?: InstanceType<typeof SetupAccountCreateWithoutSchoolInput>;
    connectOrCreate?: InstanceType<typeof SetupAccountCreateOrConnectWithoutSchoolInput>;
    upsert?: InstanceType<typeof SetupAccountUpsertWithoutSchoolInput>;
    connect?: Prisma.AtLeast<SetupAccountWhereUniqueInput, 'id' | 'schoolName'>;
    update?: InstanceType<typeof SetupAccountUpdateToOneWithWhereWithoutSchoolInput>;
}
export declare class SetupAccountUpdateToOneWithWhereWithoutSchoolInput {
    where?: InstanceType<typeof SetupAccountWhereInput>;
    data: InstanceType<typeof SetupAccountUpdateWithoutSchoolInput>;
}
export declare class SetupAccountUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class SetupAccountUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    schoolName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    school?: InstanceType<typeof SchoolUpdateOneWithoutSetupAccountNestedInput>;
}
export declare class SetupAccountUpsertWithoutSchoolInput {
    update: InstanceType<typeof SetupAccountUpdateWithoutSchoolInput>;
    create: InstanceType<typeof SetupAccountCreateWithoutSchoolInput>;
    where?: InstanceType<typeof SetupAccountWhereInput>;
}
export declare class SetupAccountWhereUniqueInput {
    id?: string;
    schoolName?: string;
    AND?: Array<SetupAccountWhereInput>;
    OR?: Array<SetupAccountWhereInput>;
    NOT?: Array<SetupAccountWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    schoolId?: InstanceType<typeof UuidNullableFilter>;
    school?: InstanceType<typeof SchoolNullableRelationFilter>;
}
export declare class SetupAccountWhereInput {
    AND?: Array<SetupAccountWhereInput>;
    OR?: Array<SetupAccountWhereInput>;
    NOT?: Array<SetupAccountWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    schoolId?: InstanceType<typeof UuidNullableFilter>;
    schoolName?: InstanceType<typeof StringFilter>;
    school?: InstanceType<typeof SchoolNullableRelationFilter>;
}
export declare class SetupAccount {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    schoolId: string | null;
    schoolName: string;
    school?: InstanceType<typeof School> | null;
}
export declare class UpdateManySetupAccountArgs {
    data: InstanceType<typeof SetupAccountUpdateManyMutationInput>;
    where?: InstanceType<typeof SetupAccountWhereInput>;
}
export declare class UpdateOneSetupAccountArgs {
    data: InstanceType<typeof SetupAccountUpdateInput>;
    where: Prisma.AtLeast<SetupAccountWhereUniqueInput, 'id' | 'schoolName'>;
}
export declare class UpsertOneSetupAccountArgs {
    where: Prisma.AtLeast<SetupAccountWhereUniqueInput, 'id' | 'schoolName'>;
    create: InstanceType<typeof SetupAccountCreateInput>;
    update: InstanceType<typeof SetupAccountUpdateInput>;
}
export declare class AggregateSubject {
    _count?: InstanceType<typeof SubjectCountAggregate>;
    _min?: InstanceType<typeof SubjectMinAggregate>;
    _max?: InstanceType<typeof SubjectMaxAggregate>;
}
export declare class CreateManySubjectArgs {
    data: Array<SubjectCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneSubjectArgs {
    data: InstanceType<typeof SubjectCreateInput>;
}
export declare class DeleteManySubjectArgs {
    where?: InstanceType<typeof SubjectWhereInput>;
}
export declare class DeleteOneSubjectArgs {
    where: Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>;
}
export declare class FindFirstSubjectOrThrowArgs {
    where?: InstanceType<typeof SubjectWhereInput>;
    orderBy?: Array<SubjectOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SubjectScalarFieldEnum>;
}
export declare class FindFirstSubjectArgs {
    where?: InstanceType<typeof SubjectWhereInput>;
    orderBy?: Array<SubjectOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SubjectScalarFieldEnum>;
}
export declare class FindManySubjectArgs {
    where?: InstanceType<typeof SubjectWhereInput>;
    orderBy?: Array<SubjectOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SubjectScalarFieldEnum>;
}
export declare class FindUniqueSubjectOrThrowArgs {
    where: Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>;
}
export declare class FindUniqueSubjectArgs {
    where: Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>;
}
export declare class SubjectAggregateArgs {
    where?: InstanceType<typeof SubjectWhereInput>;
    orderBy?: Array<SubjectOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SubjectCountAggregateInput>;
    _min?: InstanceType<typeof SubjectMinAggregateInput>;
    _max?: InstanceType<typeof SubjectMaxAggregateInput>;
}
export declare class SubjectCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    schoolId?: true;
    shortName?: true;
    type?: true;
    _all?: true;
}
export declare class SubjectCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    schoolId: number;
    shortName: number;
    type: number;
    _all: number;
}
export declare class SubjectCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    shortName?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
}
export declare class SubjectCount {
    courses?: number;
}
export declare class SubjectCreateManySchoolInputEnvelope {
    data: Array<SubjectCreateManySchoolInput>;
    skipDuplicates?: boolean;
}
export declare class SubjectCreateManySchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shortName: string;
    type: keyof typeof SubjectType;
}
export declare class SubjectCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schoolId: string;
    shortName: string;
    type: keyof typeof SubjectType;
}
export declare class SubjectCreateNestedManyWithoutSchoolInput {
    create?: Array<SubjectCreateWithoutSchoolInput>;
    connectOrCreate?: Array<SubjectCreateOrConnectWithoutSchoolInput>;
    createMany?: InstanceType<typeof SubjectCreateManySchoolInputEnvelope>;
    connect?: Array<Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>>;
}
export declare class SubjectCreateNestedOneWithoutCoursesInput {
    create?: InstanceType<typeof SubjectCreateWithoutCoursesInput>;
    connectOrCreate?: InstanceType<typeof SubjectCreateOrConnectWithoutCoursesInput>;
    connect?: Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>;
}
export declare class SubjectCreateOrConnectWithoutCoursesInput {
    where: Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>;
    create: InstanceType<typeof SubjectCreateWithoutCoursesInput>;
}
export declare class SubjectCreateOrConnectWithoutSchoolInput {
    where: Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>;
    create: InstanceType<typeof SubjectCreateWithoutSchoolInput>;
}
export declare class SubjectCreateWithoutCoursesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shortName: string;
    type: keyof typeof SubjectType;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutSubjectsInput>;
}
export declare class SubjectCreateWithoutSchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shortName: string;
    type: keyof typeof SubjectType;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutSubjectInput>;
}
export declare class SubjectCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shortName: string;
    type: keyof typeof SubjectType;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutSubjectInput>;
    school: InstanceType<typeof SchoolCreateNestedOneWithoutSubjectsInput>;
}
export declare class SubjectGroupByArgs {
    where?: InstanceType<typeof SubjectWhereInput>;
    orderBy?: Array<SubjectOrderByWithAggregationInput>;
    by: Array<keyof typeof SubjectScalarFieldEnum>;
    having?: InstanceType<typeof SubjectScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof SubjectCountAggregateInput>;
    _min?: InstanceType<typeof SubjectMinAggregateInput>;
    _max?: InstanceType<typeof SubjectMaxAggregateInput>;
}
export declare class SubjectGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    schoolId: string;
    shortName: string;
    type: keyof typeof SubjectType;
    _count?: InstanceType<typeof SubjectCountAggregate>;
    _min?: InstanceType<typeof SubjectMinAggregate>;
    _max?: InstanceType<typeof SubjectMaxAggregate>;
}
export declare class SubjectListRelationFilter {
    every?: InstanceType<typeof SubjectWhereInput>;
    some?: InstanceType<typeof SubjectWhereInput>;
    none?: InstanceType<typeof SubjectWhereInput>;
}
export declare class SubjectMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    schoolId?: true;
    shortName?: true;
    type?: true;
}
export declare class SubjectMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schoolId?: string;
    shortName?: string;
    type?: keyof typeof SubjectType;
}
export declare class SubjectMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    shortName?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
}
export declare class SubjectMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    schoolId?: true;
    shortName?: true;
    type?: true;
}
export declare class SubjectMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schoolId?: string;
    shortName?: string;
    type?: keyof typeof SubjectType;
}
export declare class SubjectMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    shortName?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
}
export declare class SubjectOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class SubjectOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    shortName?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    _count?: InstanceType<typeof SubjectCountOrderByAggregateInput>;
    _max?: InstanceType<typeof SubjectMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof SubjectMinOrderByAggregateInput>;
}
export declare class SubjectOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    schoolId?: keyof typeof SortOrder;
    shortName?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    courses?: InstanceType<typeof CourseOrderByRelationAggregateInput>;
    school?: InstanceType<typeof SchoolOrderByWithRelationInput>;
}
export declare class SubjectRelationFilter {
    is?: InstanceType<typeof SubjectWhereInput>;
    isNot?: InstanceType<typeof SubjectWhereInput>;
}
export declare class SubjectScalarWhereWithAggregatesInput {
    AND?: Array<SubjectScalarWhereWithAggregatesInput>;
    OR?: Array<SubjectScalarWhereWithAggregatesInput>;
    NOT?: Array<SubjectScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    schoolId?: InstanceType<typeof UuidWithAggregatesFilter>;
    shortName?: InstanceType<typeof StringWithAggregatesFilter>;
    type?: InstanceType<typeof EnumSubjectTypeWithAggregatesFilter>;
}
export declare class SubjectScalarWhereInput {
    AND?: Array<SubjectScalarWhereInput>;
    OR?: Array<SubjectScalarWhereInput>;
    NOT?: Array<SubjectScalarWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
    shortName?: InstanceType<typeof StringFilter>;
    type?: InstanceType<typeof EnumSubjectTypeFilter>;
}
export declare class SubjectUncheckedCreateNestedManyWithoutSchoolInput {
    create?: Array<SubjectCreateWithoutSchoolInput>;
    connectOrCreate?: Array<SubjectCreateOrConnectWithoutSchoolInput>;
    createMany?: InstanceType<typeof SubjectCreateManySchoolInputEnvelope>;
    connect?: Array<Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>>;
}
export declare class SubjectUncheckedCreateWithoutCoursesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schoolId: string;
    shortName: string;
    type: keyof typeof SubjectType;
}
export declare class SubjectUncheckedCreateWithoutSchoolInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shortName: string;
    type: keyof typeof SubjectType;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutSubjectInput>;
}
export declare class SubjectUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schoolId: string;
    shortName: string;
    type: keyof typeof SubjectType;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutSubjectInput>;
}
export declare class SubjectUncheckedUpdateManyWithoutSchoolNestedInput {
    create?: Array<SubjectCreateWithoutSchoolInput>;
    connectOrCreate?: Array<SubjectCreateOrConnectWithoutSchoolInput>;
    upsert?: Array<SubjectUpsertWithWhereUniqueWithoutSchoolInput>;
    createMany?: InstanceType<typeof SubjectCreateManySchoolInputEnvelope>;
    set?: Array<Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>>;
    disconnect?: Array<Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>>;
    delete?: Array<Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>>;
    connect?: Array<Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>>;
    update?: Array<SubjectUpdateWithWhereUniqueWithoutSchoolInput>;
    updateMany?: Array<SubjectUpdateManyWithWhereWithoutSchoolInput>;
    deleteMany?: Array<SubjectScalarWhereInput>;
}
export declare class SubjectUncheckedUpdateManyWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    shortName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumSubjectTypeFieldUpdateOperationsInput>;
}
export declare class SubjectUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    shortName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumSubjectTypeFieldUpdateOperationsInput>;
}
export declare class SubjectUncheckedUpdateWithoutCoursesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    shortName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumSubjectTypeFieldUpdateOperationsInput>;
}
export declare class SubjectUncheckedUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    shortName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumSubjectTypeFieldUpdateOperationsInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutSubjectNestedInput>;
}
export declare class SubjectUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    schoolId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    shortName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumSubjectTypeFieldUpdateOperationsInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutSubjectNestedInput>;
}
export declare class SubjectUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    shortName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumSubjectTypeFieldUpdateOperationsInput>;
}
export declare class SubjectUpdateManyWithWhereWithoutSchoolInput {
    where: InstanceType<typeof SubjectScalarWhereInput>;
    data: InstanceType<typeof SubjectUpdateManyMutationInput>;
}
export declare class SubjectUpdateManyWithoutSchoolNestedInput {
    create?: Array<SubjectCreateWithoutSchoolInput>;
    connectOrCreate?: Array<SubjectCreateOrConnectWithoutSchoolInput>;
    upsert?: Array<SubjectUpsertWithWhereUniqueWithoutSchoolInput>;
    createMany?: InstanceType<typeof SubjectCreateManySchoolInputEnvelope>;
    set?: Array<Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>>;
    disconnect?: Array<Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>>;
    delete?: Array<Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>>;
    connect?: Array<Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>>;
    update?: Array<SubjectUpdateWithWhereUniqueWithoutSchoolInput>;
    updateMany?: Array<SubjectUpdateManyWithWhereWithoutSchoolInput>;
    deleteMany?: Array<SubjectScalarWhereInput>;
}
export declare class SubjectUpdateOneRequiredWithoutCoursesNestedInput {
    create?: InstanceType<typeof SubjectCreateWithoutCoursesInput>;
    connectOrCreate?: InstanceType<typeof SubjectCreateOrConnectWithoutCoursesInput>;
    upsert?: InstanceType<typeof SubjectUpsertWithoutCoursesInput>;
    connect?: Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>;
    update?: InstanceType<typeof SubjectUpdateToOneWithWhereWithoutCoursesInput>;
}
export declare class SubjectUpdateToOneWithWhereWithoutCoursesInput {
    where?: InstanceType<typeof SubjectWhereInput>;
    data: InstanceType<typeof SubjectUpdateWithoutCoursesInput>;
}
export declare class SubjectUpdateWithWhereUniqueWithoutSchoolInput {
    where: Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>;
    data: InstanceType<typeof SubjectUpdateWithoutSchoolInput>;
}
export declare class SubjectUpdateWithoutCoursesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    shortName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumSubjectTypeFieldUpdateOperationsInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutSubjectsNestedInput>;
}
export declare class SubjectUpdateWithoutSchoolInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    shortName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumSubjectTypeFieldUpdateOperationsInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutSubjectNestedInput>;
}
export declare class SubjectUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    shortName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumSubjectTypeFieldUpdateOperationsInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutSubjectNestedInput>;
    school?: InstanceType<typeof SchoolUpdateOneRequiredWithoutSubjectsNestedInput>;
}
export declare class SubjectUpsertWithWhereUniqueWithoutSchoolInput {
    where: Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>;
    update: InstanceType<typeof SubjectUpdateWithoutSchoolInput>;
    create: InstanceType<typeof SubjectCreateWithoutSchoolInput>;
}
export declare class SubjectUpsertWithoutCoursesInput {
    update: InstanceType<typeof SubjectUpdateWithoutCoursesInput>;
    create: InstanceType<typeof SubjectCreateWithoutCoursesInput>;
    where?: InstanceType<typeof SubjectWhereInput>;
}
export declare class SubjectWhereUniqueInput {
    id?: string;
    type?: keyof typeof SubjectType;
    AND?: Array<SubjectWhereInput>;
    OR?: Array<SubjectWhereInput>;
    NOT?: Array<SubjectWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
    shortName?: InstanceType<typeof StringFilter>;
    courses?: InstanceType<typeof CourseListRelationFilter>;
    school?: InstanceType<typeof SchoolRelationFilter>;
}
export declare class SubjectWhereInput {
    AND?: Array<SubjectWhereInput>;
    OR?: Array<SubjectWhereInput>;
    NOT?: Array<SubjectWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    schoolId?: InstanceType<typeof UuidFilter>;
    shortName?: InstanceType<typeof StringFilter>;
    type?: InstanceType<typeof EnumSubjectTypeFilter>;
    courses?: InstanceType<typeof CourseListRelationFilter>;
    school?: InstanceType<typeof SchoolRelationFilter>;
}
export declare class Subject {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    schoolId: string;
    shortName: string;
    type: keyof typeof SubjectType;
    courses?: Array<Course>;
    school?: InstanceType<typeof School>;
    _count?: InstanceType<typeof SubjectCount>;
}
export declare class UpdateManySubjectArgs {
    data: InstanceType<typeof SubjectUpdateManyMutationInput>;
    where?: InstanceType<typeof SubjectWhereInput>;
}
export declare class UpdateOneSubjectArgs {
    data: InstanceType<typeof SubjectUpdateInput>;
    where: Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>;
}
export declare class UpsertOneSubjectArgs {
    where: Prisma.AtLeast<SubjectWhereUniqueInput, 'id' | 'type'>;
    create: InstanceType<typeof SubjectCreateInput>;
    update: InstanceType<typeof SubjectUpdateInput>;
}
export declare class AggregateUser {
    _count?: InstanceType<typeof UserCountAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class CreateManyUserArgs {
    data: Array<UserCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserArgs {
    data: InstanceType<typeof UserCreateInput>;
}
export declare class DeleteManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class DeleteOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
}
export declare class FindFirstUserOrThrowArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindFirstUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindUniqueUserOrThrowArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
}
export declare class FindUniqueUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
}
export declare class UpdateManyUserArgs {
    data: InstanceType<typeof UserUpdateManyMutationInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UpdateOneUserArgs {
    data: InstanceType<typeof UserUpdateInput>;
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
}
export declare class UpsertOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    create: InstanceType<typeof UserCreateInput>;
    update: InstanceType<typeof UserUpdateInput>;
}
export declare class UserAggregateArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    avatar?: true;
    firstName?: true;
    lastName?: true;
    type?: true;
    userAccountId?: true;
    _all?: true;
}
export declare class UserCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    avatar: number;
    firstName: number;
    lastName: number;
    type: number;
    userAccountId: number;
    _all: number;
}
export declare class UserCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    avatar?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    userAccountId?: keyof typeof SortOrder;
}
export declare class UserCount {
    activities?: number;
    blackboards?: number;
    blackboardsReceived?: number;
    classes?: number;
    clubs?: number;
    clubsAsLeader?: number;
    courses?: number;
    coursesAsTeacher?: number;
    events?: number;
    eventTickets?: number;
    schools?: number;
    targetActivities?: number;
    userChats?: number;
}
export declare class UserCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
}
export declare class UserCreateNestedManyWithoutBlackboardsReceivedInput {
    create?: Array<UserCreateWithoutBlackboardsReceivedInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutBlackboardsReceivedInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
}
export declare class UserCreateNestedManyWithoutBlackboardsInput {
    create?: Array<UserCreateWithoutBlackboardsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutBlackboardsInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
}
export declare class UserCreateNestedManyWithoutClassesInput {
    create?: Array<UserCreateWithoutClassesInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutClassesInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
}
export declare class UserCreateNestedManyWithoutClubsAsLeaderInput {
    create?: Array<UserCreateWithoutClubsAsLeaderInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutClubsAsLeaderInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
}
export declare class UserCreateNestedManyWithoutClubsInput {
    create?: Array<UserCreateWithoutClubsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutClubsInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
}
export declare class UserCreateNestedManyWithoutCoursesInput {
    create?: Array<UserCreateWithoutCoursesInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutCoursesInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
}
export declare class UserCreateNestedManyWithoutEventsInput {
    create?: Array<UserCreateWithoutEventsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutEventsInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
}
export declare class UserCreateNestedManyWithoutSchoolsInput {
    create?: Array<UserCreateWithoutSchoolsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutSchoolsInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
}
export declare class UserCreateNestedOneWithoutActivitiesInput {
    create?: InstanceType<typeof UserCreateWithoutActivitiesInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutActivitiesInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
}
export declare class UserCreateNestedOneWithoutCoursesAsTeacherInput {
    create?: InstanceType<typeof UserCreateWithoutCoursesAsTeacherInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCoursesAsTeacherInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
}
export declare class UserCreateNestedOneWithoutEventTicketsInput {
    create?: InstanceType<typeof UserCreateWithoutEventTicketsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutEventTicketsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
}
export declare class UserCreateNestedOneWithoutTargetActivitiesInput {
    create?: InstanceType<typeof UserCreateWithoutTargetActivitiesInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutTargetActivitiesInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
}
export declare class UserCreateNestedOneWithoutUserAccountInput {
    create?: InstanceType<typeof UserCreateWithoutUserAccountInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserAccountInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
}
export declare class UserCreateNestedOneWithoutUserChatsInput {
    create?: InstanceType<typeof UserCreateWithoutUserChatsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserChatsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
}
export declare class UserCreateOrConnectWithoutActivitiesInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    create: InstanceType<typeof UserCreateWithoutActivitiesInput>;
}
export declare class UserCreateOrConnectWithoutBlackboardsReceivedInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    create: InstanceType<typeof UserCreateWithoutBlackboardsReceivedInput>;
}
export declare class UserCreateOrConnectWithoutBlackboardsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    create: InstanceType<typeof UserCreateWithoutBlackboardsInput>;
}
export declare class UserCreateOrConnectWithoutClassesInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    create: InstanceType<typeof UserCreateWithoutClassesInput>;
}
export declare class UserCreateOrConnectWithoutClubsAsLeaderInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    create: InstanceType<typeof UserCreateWithoutClubsAsLeaderInput>;
}
export declare class UserCreateOrConnectWithoutClubsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    create: InstanceType<typeof UserCreateWithoutClubsInput>;
}
export declare class UserCreateOrConnectWithoutCoursesAsTeacherInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    create: InstanceType<typeof UserCreateWithoutCoursesAsTeacherInput>;
}
export declare class UserCreateOrConnectWithoutCoursesInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    create: InstanceType<typeof UserCreateWithoutCoursesInput>;
}
export declare class UserCreateOrConnectWithoutEventTicketsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    create: InstanceType<typeof UserCreateWithoutEventTicketsInput>;
}
export declare class UserCreateOrConnectWithoutEventsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    create: InstanceType<typeof UserCreateWithoutEventsInput>;
}
export declare class UserCreateOrConnectWithoutSchoolsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    create: InstanceType<typeof UserCreateWithoutSchoolsInput>;
}
export declare class UserCreateOrConnectWithoutTargetActivitiesInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    create: InstanceType<typeof UserCreateWithoutTargetActivitiesInput>;
}
export declare class UserCreateOrConnectWithoutUserAccountInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    create: InstanceType<typeof UserCreateWithoutUserAccountInput>;
}
export declare class UserCreateOrConnectWithoutUserChatsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    create: InstanceType<typeof UserCreateWithoutUserChatsInput>;
}
export declare class UserCreateWithoutActivitiesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutTargetInput>;
    userAccount: InstanceType<typeof UserAccountCreateNestedOneWithoutUserInput>;
    userChats?: InstanceType<typeof UserChatCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutBlackboardsReceivedInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    activities?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutAuthorsInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutTargetInput>;
    userAccount: InstanceType<typeof UserAccountCreateNestedOneWithoutUserInput>;
    userChats?: InstanceType<typeof UserChatCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutBlackboardsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    activities?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutUserInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutTargetInput>;
    userAccount: InstanceType<typeof UserAccountCreateNestedOneWithoutUserInput>;
    userChats?: InstanceType<typeof UserChatCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutClassesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    activities?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardCreateNestedManyWithoutTargetsInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutTargetInput>;
    userAccount: InstanceType<typeof UserAccountCreateNestedOneWithoutUserInput>;
    userChats?: InstanceType<typeof UserChatCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutClubsAsLeaderInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    activities?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutMembersInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutTargetInput>;
    userAccount: InstanceType<typeof UserAccountCreateNestedOneWithoutUserInput>;
    userChats?: InstanceType<typeof UserChatCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutClubsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    activities?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutTargetInput>;
    userAccount: InstanceType<typeof UserAccountCreateNestedOneWithoutUserInput>;
    userChats?: InstanceType<typeof UserChatCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutCoursesAsTeacherInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    activities?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutMembersInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutTargetInput>;
    userAccount: InstanceType<typeof UserAccountCreateNestedOneWithoutUserInput>;
    userChats?: InstanceType<typeof UserChatCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutCoursesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    activities?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubCreateNestedManyWithoutLeadersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutTargetInput>;
    userAccount: InstanceType<typeof UserAccountCreateNestedOneWithoutUserInput>;
    userChats?: InstanceType<typeof UserChatCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutEventTicketsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    activities?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSubscribersInput>;
    schools?: InstanceType<typeof SchoolCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutTargetInput>;
    userAccount: InstanceType<typeof UserAccountCreateNestedOneWithoutUserInput>;
    userChats?: InstanceType<typeof UserChatCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutEventsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    activities?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseCreateNestedManyWithoutTeacherInput>;
    eventTickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutTargetInput>;
    userAccount: InstanceType<typeof UserAccountCreateNestedOneWithoutUserInput>;
    userChats?: InstanceType<typeof UserChatCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutSchoolsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    activities?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutBuyerInput>;
    targetActivities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutTargetInput>;
    userAccount: InstanceType<typeof UserAccountCreateNestedOneWithoutUserInput>;
    userChats?: InstanceType<typeof UserChatCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutTargetActivitiesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    activities?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolCreateNestedManyWithoutMembersInput>;
    userAccount: InstanceType<typeof UserAccountCreateNestedOneWithoutUserInput>;
    userChats?: InstanceType<typeof UserChatCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutUserAccountInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    activities?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutTargetInput>;
    userChats?: InstanceType<typeof UserChatCreateNestedManyWithoutUserInput>;
}
export declare class UserCreateWithoutUserChatsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    activities?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutTargetInput>;
    userAccount: InstanceType<typeof UserAccountCreateNestedOneWithoutUserInput>;
}
export declare class UserCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    activities?: InstanceType<typeof UserChatActivityCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityCreateNestedManyWithoutTargetInput>;
    userAccount: InstanceType<typeof UserAccountCreateNestedOneWithoutUserInput>;
    userChats?: InstanceType<typeof UserChatCreateNestedManyWithoutUserInput>;
}
export declare class UserGroupByArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithAggregationInput>;
    by: Array<keyof typeof UserScalarFieldEnum>;
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
    _count?: InstanceType<typeof UserCountAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class UserListRelationFilter {
    every?: InstanceType<typeof UserWhereInput>;
    some?: InstanceType<typeof UserWhereInput>;
    none?: InstanceType<typeof UserWhereInput>;
}
export declare class UserMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    avatar?: true;
    firstName?: true;
    lastName?: true;
    type?: true;
    userAccountId?: true;
}
export declare class UserMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName?: string;
    lastName?: string;
    type?: keyof typeof UserType;
    userAccountId?: string;
}
export declare class UserMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    avatar?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    userAccountId?: keyof typeof SortOrder;
}
export declare class UserMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    avatar?: true;
    firstName?: true;
    lastName?: true;
    type?: true;
    userAccountId?: true;
}
export declare class UserMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName?: string;
    lastName?: string;
    type?: keyof typeof UserType;
    userAccountId?: string;
}
export declare class UserMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    avatar?: keyof typeof SortOrder;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    userAccountId?: keyof typeof SortOrder;
}
export declare class UserNullableRelationFilter {
    is?: InstanceType<typeof UserWhereInput>;
    isNot?: InstanceType<typeof UserWhereInput>;
}
export declare class UserOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class UserOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    avatar?: InstanceType<typeof SortOrderInput>;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    userAccountId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}
export declare class UserOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    avatar?: InstanceType<typeof SortOrderInput>;
    firstName?: keyof typeof SortOrder;
    lastName?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    userAccountId?: keyof typeof SortOrder;
    activities?: InstanceType<typeof UserChatActivityOrderByRelationAggregateInput>;
    blackboards?: InstanceType<typeof BlackboardOrderByRelationAggregateInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardOrderByRelationAggregateInput>;
    classes?: InstanceType<typeof ClassOrderByRelationAggregateInput>;
    clubs?: InstanceType<typeof ClubOrderByRelationAggregateInput>;
    clubsAsLeader?: InstanceType<typeof ClubOrderByRelationAggregateInput>;
    courses?: InstanceType<typeof CourseOrderByRelationAggregateInput>;
    coursesAsTeacher?: InstanceType<typeof CourseOrderByRelationAggregateInput>;
    events?: InstanceType<typeof EventOrderByRelationAggregateInput>;
    eventTickets?: InstanceType<typeof EventTicketOrderByRelationAggregateInput>;
    schools?: InstanceType<typeof SchoolOrderByRelationAggregateInput>;
    targetActivities?: InstanceType<typeof ChatActivityOrderByRelationAggregateInput>;
    userAccount?: InstanceType<typeof UserAccountOrderByWithRelationInput>;
    userChats?: InstanceType<typeof UserChatOrderByRelationAggregateInput>;
}
export declare class UserRelationFilter {
    is?: InstanceType<typeof UserWhereInput>;
    isNot?: InstanceType<typeof UserWhereInput>;
}
export declare class UserScalarWhereWithAggregatesInput {
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    avatar?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    firstName?: InstanceType<typeof StringWithAggregatesFilter>;
    lastName?: InstanceType<typeof StringWithAggregatesFilter>;
    type?: InstanceType<typeof EnumUserTypeWithAggregatesFilter>;
    userAccountId?: InstanceType<typeof UuidWithAggregatesFilter>;
}
export declare class UserScalarWhereInput {
    AND?: Array<UserScalarWhereInput>;
    OR?: Array<UserScalarWhereInput>;
    NOT?: Array<UserScalarWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    avatar?: InstanceType<typeof StringNullableFilter>;
    firstName?: InstanceType<typeof StringFilter>;
    lastName?: InstanceType<typeof StringFilter>;
    type?: InstanceType<typeof EnumUserTypeFilter>;
    userAccountId?: InstanceType<typeof UuidFilter>;
}
export declare class UserUncheckedCreateNestedManyWithoutBlackboardsReceivedInput {
    create?: Array<UserCreateWithoutBlackboardsReceivedInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutBlackboardsReceivedInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
}
export declare class UserUncheckedCreateNestedManyWithoutBlackboardsInput {
    create?: Array<UserCreateWithoutBlackboardsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutBlackboardsInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
}
export declare class UserUncheckedCreateNestedManyWithoutClassesInput {
    create?: Array<UserCreateWithoutClassesInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutClassesInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
}
export declare class UserUncheckedCreateNestedManyWithoutClubsAsLeaderInput {
    create?: Array<UserCreateWithoutClubsAsLeaderInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutClubsAsLeaderInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
}
export declare class UserUncheckedCreateNestedManyWithoutClubsInput {
    create?: Array<UserCreateWithoutClubsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutClubsInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
}
export declare class UserUncheckedCreateNestedManyWithoutCoursesInput {
    create?: Array<UserCreateWithoutCoursesInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutCoursesInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
}
export declare class UserUncheckedCreateNestedManyWithoutEventsInput {
    create?: Array<UserCreateWithoutEventsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutEventsInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
}
export declare class UserUncheckedCreateNestedManyWithoutSchoolsInput {
    create?: Array<UserCreateWithoutSchoolsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutSchoolsInput>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
}
export declare class UserUncheckedCreateNestedOneWithoutUserAccountInput {
    create?: InstanceType<typeof UserCreateWithoutUserAccountInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserAccountInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
}
export declare class UserUncheckedCreateWithoutActivitiesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolUncheckedCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutTargetInput>;
    userChats?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutBlackboardsReceivedInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
    activities?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutAuthorsInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolUncheckedCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutTargetInput>;
    userChats?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutBlackboardsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
    activities?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutUserInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolUncheckedCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutTargetInput>;
    userChats?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutClassesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
    activities?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutTargetsInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolUncheckedCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutTargetInput>;
    userChats?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutClubsAsLeaderInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
    activities?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutMembersInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolUncheckedCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutTargetInput>;
    userChats?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutClubsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
    activities?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolUncheckedCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutTargetInput>;
    userChats?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutCoursesAsTeacherInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
    activities?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutMembersInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolUncheckedCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutTargetInput>;
    userChats?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutCoursesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
    activities?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutLeadersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolUncheckedCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutTargetInput>;
    userChats?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutEventTicketsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
    activities?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSubscribersInput>;
    schools?: InstanceType<typeof SchoolUncheckedCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutTargetInput>;
    userChats?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutEventsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
    activities?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutTeacherInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolUncheckedCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutTargetInput>;
    userChats?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutSchoolsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
    activities?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutBuyerInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutTargetInput>;
    userChats?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutTargetActivitiesInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
    activities?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolUncheckedCreateNestedManyWithoutMembersInput>;
    userChats?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutUserAccountInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    activities?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolUncheckedCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutTargetInput>;
    userChats?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedCreateWithoutUserChatsInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
    activities?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolUncheckedCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutTargetInput>;
}
export declare class UserUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    avatar?: string;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
    activities?: InstanceType<typeof UserChatActivityUncheckedCreateNestedManyWithoutUserInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutAuthorsInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedCreateNestedManyWithoutTargetsInput>;
    classes?: InstanceType<typeof ClassUncheckedCreateNestedManyWithoutMembersInput>;
    clubs?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutMembersInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedCreateNestedManyWithoutLeadersInput>;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutMembersInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutTeacherInput>;
    events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutSubscribersInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedCreateNestedManyWithoutBuyerInput>;
    schools?: InstanceType<typeof SchoolUncheckedCreateNestedManyWithoutMembersInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedCreateNestedManyWithoutTargetInput>;
    userChats?: InstanceType<typeof UserChatUncheckedCreateNestedManyWithoutUserInput>;
}
export declare class UserUncheckedUpdateManyWithoutBlackboardsNestedInput {
    create?: Array<UserCreateWithoutBlackboardsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutBlackboardsInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutBlackboardsInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutBlackboardsInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutBlackboardsInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutBlackboardsReceivedNestedInput {
    create?: Array<UserCreateWithoutBlackboardsReceivedInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutBlackboardsReceivedInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutBlackboardsReceivedInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutBlackboardsReceivedInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutBlackboardsReceivedInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutBlackboardsReceivedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyWithoutBlackboardsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyWithoutClassesNestedInput {
    create?: Array<UserCreateWithoutClassesInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutClassesInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutClassesInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutClassesInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutClassesInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutClassesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyWithoutClubsAsLeaderNestedInput {
    create?: Array<UserCreateWithoutClubsAsLeaderInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutClubsAsLeaderInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutClubsAsLeaderInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutClubsAsLeaderInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutClubsAsLeaderInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutClubsAsLeaderInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyWithoutClubsNestedInput {
    create?: Array<UserCreateWithoutClubsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutClubsInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutClubsInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutClubsInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutClubsInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutClubsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyWithoutCoursesNestedInput {
    create?: Array<UserCreateWithoutCoursesInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutCoursesInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutCoursesInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutCoursesInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutCoursesInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutCoursesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyWithoutEventsNestedInput {
    create?: Array<UserCreateWithoutEventsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutEventsInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutEventsInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutEventsInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutEventsInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutEventsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyWithoutSchoolsNestedInput {
    create?: Array<UserCreateWithoutSchoolsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutSchoolsInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutSchoolsInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutSchoolsInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutSchoolsInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUncheckedUpdateManyWithoutSchoolsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateOneWithoutUserAccountNestedInput {
    create?: InstanceType<typeof UserCreateWithoutUserAccountInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserAccountInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutUserAccountInput>;
    disconnect?: InstanceType<typeof UserWhereInput>;
    delete?: InstanceType<typeof UserWhereInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutUserAccountInput>;
}
export declare class UserUncheckedUpdateWithoutActivitiesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUncheckedUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutTargetNestedInput>;
    userChats?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutBlackboardsReceivedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutAuthorsNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUncheckedUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutTargetNestedInput>;
    userChats?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutBlackboardsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutUserNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUncheckedUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutTargetNestedInput>;
    userChats?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutClassesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutTargetsNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUncheckedUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutTargetNestedInput>;
    userChats?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutClubsAsLeaderInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutMembersNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUncheckedUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutTargetNestedInput>;
    userChats?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutClubsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUncheckedUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutTargetNestedInput>;
    userChats?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutCoursesAsTeacherInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutMembersNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUncheckedUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutTargetNestedInput>;
    userChats?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutCoursesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedUpdateManyWithoutLeadersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUncheckedUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutTargetNestedInput>;
    userChats?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutEventTicketsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSubscribersNestedInput>;
    schools?: InstanceType<typeof SchoolUncheckedUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutTargetNestedInput>;
    userChats?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutEventsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedUpdateManyWithoutTeacherNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUncheckedUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutTargetNestedInput>;
    userChats?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutSchoolsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutBuyerNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutTargetNestedInput>;
    userChats?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutTargetActivitiesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUncheckedUpdateManyWithoutMembersNestedInput>;
    userChats?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutUserAccountInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUncheckedUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutTargetNestedInput>;
    userChats?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateWithoutUserChatsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUncheckedUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutTargetNestedInput>;
}
export declare class UserUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    userAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUncheckedUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUncheckedUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUncheckedUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUncheckedUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUncheckedUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUncheckedUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUncheckedUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUncheckedUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUncheckedUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUncheckedUpdateManyWithoutTargetNestedInput>;
    userChats?: InstanceType<typeof UserChatUncheckedUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
}
export declare class UserUpdateManyWithWhereWithoutBlackboardsReceivedInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithWhereWithoutBlackboardsInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithWhereWithoutClassesInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithWhereWithoutClubsAsLeaderInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithWhereWithoutClubsInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithWhereWithoutCoursesInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithWhereWithoutEventsInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithWhereWithoutSchoolsInput {
    where: InstanceType<typeof UserScalarWhereInput>;
    data: InstanceType<typeof UserUpdateManyMutationInput>;
}
export declare class UserUpdateManyWithoutBlackboardsNestedInput {
    create?: Array<UserCreateWithoutBlackboardsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutBlackboardsInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutBlackboardsInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutBlackboardsInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutBlackboardsInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateManyWithoutBlackboardsReceivedNestedInput {
    create?: Array<UserCreateWithoutBlackboardsReceivedInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutBlackboardsReceivedInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutBlackboardsReceivedInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutBlackboardsReceivedInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutBlackboardsReceivedInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateManyWithoutClassesNestedInput {
    create?: Array<UserCreateWithoutClassesInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutClassesInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutClassesInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutClassesInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutClassesInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateManyWithoutClubsAsLeaderNestedInput {
    create?: Array<UserCreateWithoutClubsAsLeaderInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutClubsAsLeaderInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutClubsAsLeaderInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutClubsAsLeaderInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutClubsAsLeaderInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateManyWithoutClubsNestedInput {
    create?: Array<UserCreateWithoutClubsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutClubsInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutClubsInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutClubsInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutClubsInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateManyWithoutCoursesNestedInput {
    create?: Array<UserCreateWithoutCoursesInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutCoursesInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutCoursesInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutCoursesInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutCoursesInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateManyWithoutEventsNestedInput {
    create?: Array<UserCreateWithoutEventsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutEventsInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutEventsInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutEventsInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutEventsInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateManyWithoutSchoolsNestedInput {
    create?: Array<UserCreateWithoutSchoolsInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutSchoolsInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutSchoolsInput>;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutSchoolsInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutSchoolsInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
export declare class UserUpdateOneRequiredWithoutActivitiesNestedInput {
    create?: InstanceType<typeof UserCreateWithoutActivitiesInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutActivitiesInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutActivitiesInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutActivitiesInput>;
}
export declare class UserUpdateOneRequiredWithoutCoursesAsTeacherNestedInput {
    create?: InstanceType<typeof UserCreateWithoutCoursesAsTeacherInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCoursesAsTeacherInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutCoursesAsTeacherInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutCoursesAsTeacherInput>;
}
export declare class UserUpdateOneRequiredWithoutEventTicketsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutEventTicketsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutEventTicketsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutEventTicketsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutEventTicketsInput>;
}
export declare class UserUpdateOneRequiredWithoutUserChatsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutUserChatsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserChatsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutUserChatsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutUserChatsInput>;
}
export declare class UserUpdateOneWithoutTargetActivitiesNestedInput {
    create?: InstanceType<typeof UserCreateWithoutTargetActivitiesInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutTargetActivitiesInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutTargetActivitiesInput>;
    disconnect?: InstanceType<typeof UserWhereInput>;
    delete?: InstanceType<typeof UserWhereInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutTargetActivitiesInput>;
}
export declare class UserUpdateOneWithoutUserAccountNestedInput {
    create?: InstanceType<typeof UserCreateWithoutUserAccountInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutUserAccountInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutUserAccountInput>;
    disconnect?: InstanceType<typeof UserWhereInput>;
    delete?: InstanceType<typeof UserWhereInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutUserAccountInput>;
}
export declare class UserUpdateToOneWithWhereWithoutActivitiesInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutActivitiesInput>;
}
export declare class UserUpdateToOneWithWhereWithoutCoursesAsTeacherInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutCoursesAsTeacherInput>;
}
export declare class UserUpdateToOneWithWhereWithoutEventTicketsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutEventTicketsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutTargetActivitiesInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutTargetActivitiesInput>;
}
export declare class UserUpdateToOneWithWhereWithoutUserAccountInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutUserAccountInput>;
}
export declare class UserUpdateToOneWithWhereWithoutUserChatsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutUserChatsInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutBlackboardsReceivedInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    data: InstanceType<typeof UserUpdateWithoutBlackboardsReceivedInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutBlackboardsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    data: InstanceType<typeof UserUpdateWithoutBlackboardsInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutClassesInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    data: InstanceType<typeof UserUpdateWithoutClassesInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutClubsAsLeaderInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    data: InstanceType<typeof UserUpdateWithoutClubsAsLeaderInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutClubsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    data: InstanceType<typeof UserUpdateWithoutClubsInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutCoursesInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    data: InstanceType<typeof UserUpdateWithoutCoursesInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutEventsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    data: InstanceType<typeof UserUpdateWithoutEventsInput>;
}
export declare class UserUpdateWithWhereUniqueWithoutSchoolsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    data: InstanceType<typeof UserUpdateWithoutSchoolsInput>;
}
export declare class UserUpdateWithoutActivitiesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUpdateManyWithoutTargetNestedInput>;
    userAccount?: InstanceType<typeof UserAccountUpdateOneRequiredWithoutUserNestedInput>;
    userChats?: InstanceType<typeof UserChatUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutBlackboardsReceivedInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutAuthorsNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUpdateManyWithoutTargetNestedInput>;
    userAccount?: InstanceType<typeof UserAccountUpdateOneRequiredWithoutUserNestedInput>;
    userChats?: InstanceType<typeof UserChatUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutBlackboardsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUpdateManyWithoutUserNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUpdateManyWithoutTargetNestedInput>;
    userAccount?: InstanceType<typeof UserAccountUpdateOneRequiredWithoutUserNestedInput>;
    userChats?: InstanceType<typeof UserChatUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutClassesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUpdateManyWithoutTargetsNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUpdateManyWithoutTargetNestedInput>;
    userAccount?: InstanceType<typeof UserAccountUpdateOneRequiredWithoutUserNestedInput>;
    userChats?: InstanceType<typeof UserChatUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutClubsAsLeaderInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutMembersNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUpdateManyWithoutTargetNestedInput>;
    userAccount?: InstanceType<typeof UserAccountUpdateOneRequiredWithoutUserNestedInput>;
    userChats?: InstanceType<typeof UserChatUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutClubsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUpdateManyWithoutTargetNestedInput>;
    userAccount?: InstanceType<typeof UserAccountUpdateOneRequiredWithoutUserNestedInput>;
    userChats?: InstanceType<typeof UserChatUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutCoursesAsTeacherInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutMembersNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUpdateManyWithoutTargetNestedInput>;
    userAccount?: InstanceType<typeof UserAccountUpdateOneRequiredWithoutUserNestedInput>;
    userChats?: InstanceType<typeof UserChatUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutCoursesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUpdateManyWithoutLeadersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUpdateManyWithoutTargetNestedInput>;
    userAccount?: InstanceType<typeof UserAccountUpdateOneRequiredWithoutUserNestedInput>;
    userChats?: InstanceType<typeof UserChatUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutEventTicketsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSubscribersNestedInput>;
    schools?: InstanceType<typeof SchoolUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUpdateManyWithoutTargetNestedInput>;
    userAccount?: InstanceType<typeof UserAccountUpdateOneRequiredWithoutUserNestedInput>;
    userChats?: InstanceType<typeof UserChatUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutEventsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUpdateManyWithoutTeacherNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUpdateManyWithoutTargetNestedInput>;
    userAccount?: InstanceType<typeof UserAccountUpdateOneRequiredWithoutUserNestedInput>;
    userChats?: InstanceType<typeof UserChatUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutSchoolsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUpdateManyWithoutBuyerNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUpdateManyWithoutTargetNestedInput>;
    userAccount?: InstanceType<typeof UserAccountUpdateOneRequiredWithoutUserNestedInput>;
    userChats?: InstanceType<typeof UserChatUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutTargetActivitiesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUpdateManyWithoutMembersNestedInput>;
    userAccount?: InstanceType<typeof UserAccountUpdateOneRequiredWithoutUserNestedInput>;
    userChats?: InstanceType<typeof UserChatUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutUserAccountInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUpdateManyWithoutTargetNestedInput>;
    userChats?: InstanceType<typeof UserChatUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpdateWithoutUserChatsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUpdateManyWithoutTargetNestedInput>;
    userAccount?: InstanceType<typeof UserAccountUpdateOneRequiredWithoutUserNestedInput>;
}
export declare class UserUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    type?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    activities?: InstanceType<typeof UserChatActivityUpdateManyWithoutUserNestedInput>;
    blackboards?: InstanceType<typeof BlackboardUpdateManyWithoutAuthorsNestedInput>;
    blackboardsReceived?: InstanceType<typeof BlackboardUpdateManyWithoutTargetsNestedInput>;
    classes?: InstanceType<typeof ClassUpdateManyWithoutMembersNestedInput>;
    clubs?: InstanceType<typeof ClubUpdateManyWithoutMembersNestedInput>;
    clubsAsLeader?: InstanceType<typeof ClubUpdateManyWithoutLeadersNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutMembersNestedInput>;
    coursesAsTeacher?: InstanceType<typeof CourseUpdateManyWithoutTeacherNestedInput>;
    events?: InstanceType<typeof EventUpdateManyWithoutSubscribersNestedInput>;
    eventTickets?: InstanceType<typeof EventTicketUpdateManyWithoutBuyerNestedInput>;
    schools?: InstanceType<typeof SchoolUpdateManyWithoutMembersNestedInput>;
    targetActivities?: InstanceType<typeof ChatActivityUpdateManyWithoutTargetNestedInput>;
    userAccount?: InstanceType<typeof UserAccountUpdateOneRequiredWithoutUserNestedInput>;
    userChats?: InstanceType<typeof UserChatUpdateManyWithoutUserNestedInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutBlackboardsReceivedInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    update: InstanceType<typeof UserUpdateWithoutBlackboardsReceivedInput>;
    create: InstanceType<typeof UserCreateWithoutBlackboardsReceivedInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutBlackboardsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    update: InstanceType<typeof UserUpdateWithoutBlackboardsInput>;
    create: InstanceType<typeof UserCreateWithoutBlackboardsInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutClassesInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    update: InstanceType<typeof UserUpdateWithoutClassesInput>;
    create: InstanceType<typeof UserCreateWithoutClassesInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutClubsAsLeaderInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    update: InstanceType<typeof UserUpdateWithoutClubsAsLeaderInput>;
    create: InstanceType<typeof UserCreateWithoutClubsAsLeaderInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutClubsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    update: InstanceType<typeof UserUpdateWithoutClubsInput>;
    create: InstanceType<typeof UserCreateWithoutClubsInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutCoursesInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    update: InstanceType<typeof UserUpdateWithoutCoursesInput>;
    create: InstanceType<typeof UserCreateWithoutCoursesInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutEventsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    update: InstanceType<typeof UserUpdateWithoutEventsInput>;
    create: InstanceType<typeof UserCreateWithoutEventsInput>;
}
export declare class UserUpsertWithWhereUniqueWithoutSchoolsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'userAccountId'>;
    update: InstanceType<typeof UserUpdateWithoutSchoolsInput>;
    create: InstanceType<typeof UserCreateWithoutSchoolsInput>;
}
export declare class UserUpsertWithoutActivitiesInput {
    update: InstanceType<typeof UserUpdateWithoutActivitiesInput>;
    create: InstanceType<typeof UserCreateWithoutActivitiesInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutCoursesAsTeacherInput {
    update: InstanceType<typeof UserUpdateWithoutCoursesAsTeacherInput>;
    create: InstanceType<typeof UserCreateWithoutCoursesAsTeacherInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutEventTicketsInput {
    update: InstanceType<typeof UserUpdateWithoutEventTicketsInput>;
    create: InstanceType<typeof UserCreateWithoutEventTicketsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutTargetActivitiesInput {
    update: InstanceType<typeof UserUpdateWithoutTargetActivitiesInput>;
    create: InstanceType<typeof UserCreateWithoutTargetActivitiesInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutUserAccountInput {
    update: InstanceType<typeof UserUpdateWithoutUserAccountInput>;
    create: InstanceType<typeof UserCreateWithoutUserAccountInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutUserChatsInput {
    update: InstanceType<typeof UserUpdateWithoutUserChatsInput>;
    create: InstanceType<typeof UserCreateWithoutUserChatsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserWhereUniqueInput {
    id?: string;
    userAccountId?: string;
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    avatar?: InstanceType<typeof StringNullableFilter>;
    firstName?: InstanceType<typeof StringFilter>;
    lastName?: InstanceType<typeof StringFilter>;
    type?: InstanceType<typeof EnumUserTypeFilter>;
    activities?: InstanceType<typeof UserChatActivityListRelationFilter>;
    blackboards?: InstanceType<typeof BlackboardListRelationFilter>;
    blackboardsReceived?: InstanceType<typeof BlackboardListRelationFilter>;
    classes?: InstanceType<typeof ClassListRelationFilter>;
    clubs?: InstanceType<typeof ClubListRelationFilter>;
    clubsAsLeader?: InstanceType<typeof ClubListRelationFilter>;
    courses?: InstanceType<typeof CourseListRelationFilter>;
    coursesAsTeacher?: InstanceType<typeof CourseListRelationFilter>;
    events?: InstanceType<typeof EventListRelationFilter>;
    eventTickets?: InstanceType<typeof EventTicketListRelationFilter>;
    schools?: InstanceType<typeof SchoolListRelationFilter>;
    targetActivities?: InstanceType<typeof ChatActivityListRelationFilter>;
    userAccount?: InstanceType<typeof UserAccountRelationFilter>;
    userChats?: InstanceType<typeof UserChatListRelationFilter>;
}
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    avatar?: InstanceType<typeof StringNullableFilter>;
    firstName?: InstanceType<typeof StringFilter>;
    lastName?: InstanceType<typeof StringFilter>;
    type?: InstanceType<typeof EnumUserTypeFilter>;
    userAccountId?: InstanceType<typeof UuidFilter>;
    activities?: InstanceType<typeof UserChatActivityListRelationFilter>;
    blackboards?: InstanceType<typeof BlackboardListRelationFilter>;
    blackboardsReceived?: InstanceType<typeof BlackboardListRelationFilter>;
    classes?: InstanceType<typeof ClassListRelationFilter>;
    clubs?: InstanceType<typeof ClubListRelationFilter>;
    clubsAsLeader?: InstanceType<typeof ClubListRelationFilter>;
    courses?: InstanceType<typeof CourseListRelationFilter>;
    coursesAsTeacher?: InstanceType<typeof CourseListRelationFilter>;
    events?: InstanceType<typeof EventListRelationFilter>;
    eventTickets?: InstanceType<typeof EventTicketListRelationFilter>;
    schools?: InstanceType<typeof SchoolListRelationFilter>;
    targetActivities?: InstanceType<typeof ChatActivityListRelationFilter>;
    userAccount?: InstanceType<typeof UserAccountRelationFilter>;
    userChats?: InstanceType<typeof UserChatListRelationFilter>;
}
export declare class User {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    avatar: string | null;
    firstName: string;
    lastName: string;
    type: keyof typeof UserType;
    userAccountId: string;
    activities?: Array<UserChatActivity>;
    blackboards?: Array<Blackboard>;
    blackboardsReceived?: Array<Blackboard>;
    classes?: Array<Class>;
    clubs?: Array<Club>;
    clubsAsLeader?: Array<Club>;
    courses?: Array<Course>;
    coursesAsTeacher?: Array<Course>;
    events?: Array<Event>;
    eventTickets?: Array<EventTicket>;
    schools?: Array<School>;
    targetActivities?: Array<ChatActivity>;
    userAccount?: InstanceType<typeof UserAccount>;
    userChats?: Array<UserChat>;
    _count?: InstanceType<typeof UserCount>;
}
export declare class AggregateUserAccount {
    _count?: InstanceType<typeof UserAccountCountAggregate>;
    _min?: InstanceType<typeof UserAccountMinAggregate>;
    _max?: InstanceType<typeof UserAccountMaxAggregate>;
}
export declare class CreateManyUserAccountArgs {
    data: Array<UserAccountCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserAccountArgs {
    data: InstanceType<typeof UserAccountCreateInput>;
}
export declare class DeleteManyUserAccountArgs {
    where?: InstanceType<typeof UserAccountWhereInput>;
}
export declare class DeleteOneUserAccountArgs {
    where: Prisma.AtLeast<UserAccountWhereUniqueInput, 'id' | 'username'>;
}
export declare class FindFirstUserAccountOrThrowArgs {
    where?: InstanceType<typeof UserAccountWhereInput>;
    orderBy?: Array<UserAccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserAccountWhereUniqueInput, 'id' | 'username'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserAccountScalarFieldEnum>;
}
export declare class FindFirstUserAccountArgs {
    where?: InstanceType<typeof UserAccountWhereInput>;
    orderBy?: Array<UserAccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserAccountWhereUniqueInput, 'id' | 'username'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserAccountScalarFieldEnum>;
}
export declare class FindManyUserAccountArgs {
    where?: InstanceType<typeof UserAccountWhereInput>;
    orderBy?: Array<UserAccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserAccountWhereUniqueInput, 'id' | 'username'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserAccountScalarFieldEnum>;
}
export declare class FindUniqueUserAccountOrThrowArgs {
    where: Prisma.AtLeast<UserAccountWhereUniqueInput, 'id' | 'username'>;
}
export declare class FindUniqueUserAccountArgs {
    where: Prisma.AtLeast<UserAccountWhereUniqueInput, 'id' | 'username'>;
}
export declare class UpdateManyUserAccountArgs {
    data: InstanceType<typeof UserAccountUpdateManyMutationInput>;
    where?: InstanceType<typeof UserAccountWhereInput>;
}
export declare class UpdateOneUserAccountArgs {
    data: InstanceType<typeof UserAccountUpdateInput>;
    where: Prisma.AtLeast<UserAccountWhereUniqueInput, 'id' | 'username'>;
}
export declare class UpsertOneUserAccountArgs {
    where: Prisma.AtLeast<UserAccountWhereUniqueInput, 'id' | 'username'>;
    create: InstanceType<typeof UserAccountCreateInput>;
    update: InstanceType<typeof UserAccountUpdateInput>;
}
export declare class UserAccountAggregateArgs {
    where?: InstanceType<typeof UserAccountWhereInput>;
    orderBy?: Array<UserAccountOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserAccountWhereUniqueInput, 'id' | 'username'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserAccountCountAggregateInput>;
    _min?: InstanceType<typeof UserAccountMinAggregateInput>;
    _max?: InstanceType<typeof UserAccountMaxAggregateInput>;
}
export declare class UserAccountCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    password?: true;
    userId?: true;
    username?: true;
    _all?: true;
}
export declare class UserAccountCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    password: number;
    userId: number;
    username: number;
    _all: number;
}
export declare class UserAccountCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    username?: keyof typeof SortOrder;
}
export declare class UserAccountCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    password: string;
    userId?: string;
    username: string;
}
export declare class UserAccountCreateNestedOneWithoutUserInput {
    create?: InstanceType<typeof UserAccountCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof UserAccountCreateOrConnectWithoutUserInput>;
    connect?: Prisma.AtLeast<UserAccountWhereUniqueInput, 'id' | 'username'>;
}
export declare class UserAccountCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<UserAccountWhereUniqueInput, 'id' | 'username'>;
    create: InstanceType<typeof UserAccountCreateWithoutUserInput>;
}
export declare class UserAccountCreateWithoutUserInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    password: string;
    userId?: string;
    username: string;
}
export declare class UserAccountCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    password: string;
    userId?: string;
    username: string;
    user?: InstanceType<typeof UserCreateNestedOneWithoutUserAccountInput>;
}
export declare class UserAccountGroupByArgs {
    where?: InstanceType<typeof UserAccountWhereInput>;
    orderBy?: Array<UserAccountOrderByWithAggregationInput>;
    by: Array<keyof typeof UserAccountScalarFieldEnum>;
    having?: InstanceType<typeof UserAccountScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserAccountCountAggregateInput>;
    _min?: InstanceType<typeof UserAccountMinAggregateInput>;
    _max?: InstanceType<typeof UserAccountMaxAggregateInput>;
}
export declare class UserAccountGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    password: string;
    userId?: string;
    username: string;
    _count?: InstanceType<typeof UserAccountCountAggregate>;
    _min?: InstanceType<typeof UserAccountMinAggregate>;
    _max?: InstanceType<typeof UserAccountMaxAggregate>;
}
export declare class UserAccountMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    password?: true;
    userId?: true;
    username?: true;
}
export declare class UserAccountMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    password?: string;
    userId?: string;
    username?: string;
}
export declare class UserAccountMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    username?: keyof typeof SortOrder;
}
export declare class UserAccountMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    password?: true;
    userId?: true;
    username?: true;
}
export declare class UserAccountMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    password?: string;
    userId?: string;
    username?: string;
}
export declare class UserAccountMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    username?: keyof typeof SortOrder;
}
export declare class UserAccountOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    userId?: InstanceType<typeof SortOrderInput>;
    username?: keyof typeof SortOrder;
    _count?: InstanceType<typeof UserAccountCountOrderByAggregateInput>;
    _max?: InstanceType<typeof UserAccountMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserAccountMinOrderByAggregateInput>;
}
export declare class UserAccountOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    userId?: InstanceType<typeof SortOrderInput>;
    username?: keyof typeof SortOrder;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class UserAccountRelationFilter {
    is?: InstanceType<typeof UserAccountWhereInput>;
    isNot?: InstanceType<typeof UserAccountWhereInput>;
}
export declare class UserAccountScalarWhereWithAggregatesInput {
    AND?: Array<UserAccountScalarWhereWithAggregatesInput>;
    OR?: Array<UserAccountScalarWhereWithAggregatesInput>;
    NOT?: Array<UserAccountScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    userId?: InstanceType<typeof UuidNullableWithAggregatesFilter>;
    username?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class UserAccountUncheckedCreateWithoutUserInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    password: string;
    userId?: string;
    username: string;
}
export declare class UserAccountUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    password: string;
    userId?: string;
    username: string;
    user?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutUserAccountInput>;
}
export declare class UserAccountUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserAccountUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserAccountUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUncheckedUpdateOneWithoutUserAccountNestedInput>;
}
export declare class UserAccountUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserAccountUpdateOneRequiredWithoutUserNestedInput {
    create?: InstanceType<typeof UserAccountCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof UserAccountCreateOrConnectWithoutUserInput>;
    upsert?: InstanceType<typeof UserAccountUpsertWithoutUserInput>;
    connect?: Prisma.AtLeast<UserAccountWhereUniqueInput, 'id' | 'username'>;
    update?: InstanceType<typeof UserAccountUpdateToOneWithWhereWithoutUserInput>;
}
export declare class UserAccountUpdateToOneWithWhereWithoutUserInput {
    where?: InstanceType<typeof UserAccountWhereInput>;
    data: InstanceType<typeof UserAccountUpdateWithoutUserInput>;
}
export declare class UserAccountUpdateWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserAccountUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneWithoutUserAccountNestedInput>;
}
export declare class UserAccountUpsertWithoutUserInput {
    update: InstanceType<typeof UserAccountUpdateWithoutUserInput>;
    create: InstanceType<typeof UserAccountCreateWithoutUserInput>;
    where?: InstanceType<typeof UserAccountWhereInput>;
}
export declare class UserAccountWhereUniqueInput {
    id?: string;
    username?: string;
    AND?: Array<UserAccountWhereInput>;
    OR?: Array<UserAccountWhereInput>;
    NOT?: Array<UserAccountWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    password?: InstanceType<typeof StringFilter>;
    userId?: InstanceType<typeof UuidNullableFilter>;
    user?: InstanceType<typeof UserNullableRelationFilter>;
}
export declare class UserAccountWhereInput {
    AND?: Array<UserAccountWhereInput>;
    OR?: Array<UserAccountWhereInput>;
    NOT?: Array<UserAccountWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    password?: InstanceType<typeof StringFilter>;
    userId?: InstanceType<typeof UuidNullableFilter>;
    username?: InstanceType<typeof StringFilter>;
    user?: InstanceType<typeof UserNullableRelationFilter>;
}
export declare class UserAccount {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    password: string;
    userId: string | null;
    username: string;
    user?: InstanceType<typeof User> | null;
}
export declare class AggregateUserChat {
    _count?: InstanceType<typeof UserChatCountAggregate>;
    _min?: InstanceType<typeof UserChatMinAggregate>;
    _max?: InstanceType<typeof UserChatMaxAggregate>;
}
export declare class CreateManyUserChatArgs {
    data: Array<UserChatCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserChatArgs {
    data: InstanceType<typeof UserChatCreateInput>;
}
export declare class DeleteManyUserChatArgs {
    where?: InstanceType<typeof UserChatWhereInput>;
}
export declare class DeleteOneUserChatArgs {
    where: Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>;
}
export declare class FindFirstUserChatOrThrowArgs {
    where?: InstanceType<typeof UserChatWhereInput>;
    orderBy?: Array<UserChatOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserChatScalarFieldEnum>;
}
export declare class FindFirstUserChatArgs {
    where?: InstanceType<typeof UserChatWhereInput>;
    orderBy?: Array<UserChatOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserChatScalarFieldEnum>;
}
export declare class FindManyUserChatArgs {
    where?: InstanceType<typeof UserChatWhereInput>;
    orderBy?: Array<UserChatOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserChatScalarFieldEnum>;
}
export declare class FindUniqueUserChatOrThrowArgs {
    where: Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>;
}
export declare class FindUniqueUserChatArgs {
    where: Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>;
}
export declare class UpdateManyUserChatArgs {
    data: InstanceType<typeof UserChatUpdateManyMutationInput>;
    where?: InstanceType<typeof UserChatWhereInput>;
}
export declare class UpdateOneUserChatArgs {
    data: InstanceType<typeof UserChatUpdateInput>;
    where: Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>;
}
export declare class UpsertOneUserChatArgs {
    where: Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>;
    create: InstanceType<typeof UserChatCreateInput>;
    update: InstanceType<typeof UserChatUpdateInput>;
}
export declare class UserChatAggregateArgs {
    where?: InstanceType<typeof UserChatWhereInput>;
    orderBy?: Array<UserChatOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserChatCountAggregateInput>;
    _min?: InstanceType<typeof UserChatMinAggregateInput>;
    _max?: InstanceType<typeof UserChatMaxAggregateInput>;
}
export declare class UserChatCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    chatId?: true;
    hidden?: true;
    pinned?: true;
    read?: true;
    userId?: true;
    _all?: true;
}
export declare class UserChatCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    chatId: number;
    hidden: number;
    pinned: number;
    read: number;
    userId: number;
    _all: number;
}
export declare class UserChatCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: keyof typeof SortOrder;
    hidden?: keyof typeof SortOrder;
    pinned?: keyof typeof SortOrder;
    read?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
export declare class UserChatCreateManyChatInputEnvelope {
    data: Array<UserChatCreateManyChatInput>;
    skipDuplicates?: boolean;
}
export declare class UserChatCreateManyChatInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hidden?: boolean;
    pinned?: boolean;
    read?: boolean;
    userId: string;
}
export declare class UserChatCreateManyUserInputEnvelope {
    data: Array<UserChatCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class UserChatCreateManyUserInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId: string;
    hidden?: boolean;
    pinned?: boolean;
    read?: boolean;
}
export declare class UserChatCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId: string;
    hidden?: boolean;
    pinned?: boolean;
    read?: boolean;
    userId: string;
}
export declare class UserChatCreateNestedManyWithoutChatInput {
    create?: Array<UserChatCreateWithoutChatInput>;
    connectOrCreate?: Array<UserChatCreateOrConnectWithoutChatInput>;
    createMany?: InstanceType<typeof UserChatCreateManyChatInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
}
export declare class UserChatCreateNestedManyWithoutUserInput {
    create?: Array<UserChatCreateWithoutUserInput>;
    connectOrCreate?: Array<UserChatCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof UserChatCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
}
export declare class UserChatCreateOrConnectWithoutChatInput {
    where: Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>;
    create: InstanceType<typeof UserChatCreateWithoutChatInput>;
}
export declare class UserChatCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>;
    create: InstanceType<typeof UserChatCreateWithoutUserInput>;
}
export declare class UserChatCreateWithoutChatInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hidden?: boolean;
    pinned?: boolean;
    read?: boolean;
    user: InstanceType<typeof UserCreateNestedOneWithoutUserChatsInput>;
}
export declare class UserChatCreateWithoutUserInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hidden?: boolean;
    pinned?: boolean;
    read?: boolean;
    chat: InstanceType<typeof ChatCreateNestedOneWithoutTargetsInput>;
}
export declare class UserChatCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hidden?: boolean;
    pinned?: boolean;
    read?: boolean;
    chat: InstanceType<typeof ChatCreateNestedOneWithoutTargetsInput>;
    user: InstanceType<typeof UserCreateNestedOneWithoutUserChatsInput>;
}
export declare class UserChatGroupByArgs {
    where?: InstanceType<typeof UserChatWhereInput>;
    orderBy?: Array<UserChatOrderByWithAggregationInput>;
    by: Array<keyof typeof UserChatScalarFieldEnum>;
    having?: InstanceType<typeof UserChatScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserChatCountAggregateInput>;
    _min?: InstanceType<typeof UserChatMinAggregateInput>;
    _max?: InstanceType<typeof UserChatMaxAggregateInput>;
}
export declare class UserChatGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    chatId: string;
    hidden: boolean;
    pinned: boolean;
    read: boolean;
    userId: string;
    _count?: InstanceType<typeof UserChatCountAggregate>;
    _min?: InstanceType<typeof UserChatMinAggregate>;
    _max?: InstanceType<typeof UserChatMaxAggregate>;
}
export declare class UserChatListRelationFilter {
    every?: InstanceType<typeof UserChatWhereInput>;
    some?: InstanceType<typeof UserChatWhereInput>;
    none?: InstanceType<typeof UserChatWhereInput>;
}
export declare class UserChatMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    chatId?: true;
    hidden?: true;
    pinned?: true;
    read?: true;
    userId?: true;
}
export declare class UserChatMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    hidden?: boolean;
    pinned?: boolean;
    read?: boolean;
    userId?: string;
}
export declare class UserChatMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: keyof typeof SortOrder;
    hidden?: keyof typeof SortOrder;
    pinned?: keyof typeof SortOrder;
    read?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
export declare class UserChatMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    chatId?: true;
    hidden?: true;
    pinned?: true;
    read?: true;
    userId?: true;
}
export declare class UserChatMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId?: string;
    hidden?: boolean;
    pinned?: boolean;
    read?: boolean;
    userId?: string;
}
export declare class UserChatMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: keyof typeof SortOrder;
    hidden?: keyof typeof SortOrder;
    pinned?: keyof typeof SortOrder;
    read?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
export declare class UserChatOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class UserChatOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: keyof typeof SortOrder;
    hidden?: keyof typeof SortOrder;
    pinned?: keyof typeof SortOrder;
    read?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof UserChatCountOrderByAggregateInput>;
    _max?: InstanceType<typeof UserChatMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserChatMinOrderByAggregateInput>;
}
export declare class UserChatOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatId?: keyof typeof SortOrder;
    hidden?: keyof typeof SortOrder;
    pinned?: keyof typeof SortOrder;
    read?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    chat?: InstanceType<typeof ChatOrderByWithRelationInput>;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class UserChatScalarWhereWithAggregatesInput {
    AND?: Array<UserChatScalarWhereWithAggregatesInput>;
    OR?: Array<UserChatScalarWhereWithAggregatesInput>;
    NOT?: Array<UserChatScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    chatId?: InstanceType<typeof UuidWithAggregatesFilter>;
    hidden?: InstanceType<typeof BoolWithAggregatesFilter>;
    pinned?: InstanceType<typeof BoolWithAggregatesFilter>;
    read?: InstanceType<typeof BoolWithAggregatesFilter>;
    userId?: InstanceType<typeof UuidWithAggregatesFilter>;
}
export declare class UserChatScalarWhereInput {
    AND?: Array<UserChatScalarWhereInput>;
    OR?: Array<UserChatScalarWhereInput>;
    NOT?: Array<UserChatScalarWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    chatId?: InstanceType<typeof UuidFilter>;
    hidden?: InstanceType<typeof BoolFilter>;
    pinned?: InstanceType<typeof BoolFilter>;
    read?: InstanceType<typeof BoolFilter>;
    userId?: InstanceType<typeof UuidFilter>;
}
export declare class UserChatUncheckedCreateNestedManyWithoutChatInput {
    create?: Array<UserChatCreateWithoutChatInput>;
    connectOrCreate?: Array<UserChatCreateOrConnectWithoutChatInput>;
    createMany?: InstanceType<typeof UserChatCreateManyChatInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
}
export declare class UserChatUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<UserChatCreateWithoutUserInput>;
    connectOrCreate?: Array<UserChatCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof UserChatCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
}
export declare class UserChatUncheckedCreateWithoutChatInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hidden?: boolean;
    pinned?: boolean;
    read?: boolean;
    userId: string;
}
export declare class UserChatUncheckedCreateWithoutUserInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId: string;
    hidden?: boolean;
    pinned?: boolean;
    read?: boolean;
}
export declare class UserChatUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatId: string;
    hidden?: boolean;
    pinned?: boolean;
    read?: boolean;
    userId: string;
}
export declare class UserChatUncheckedUpdateManyWithoutChatNestedInput {
    create?: Array<UserChatCreateWithoutChatInput>;
    connectOrCreate?: Array<UserChatCreateOrConnectWithoutChatInput>;
    upsert?: Array<UserChatUpsertWithWhereUniqueWithoutChatInput>;
    createMany?: InstanceType<typeof UserChatCreateManyChatInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
    update?: Array<UserChatUpdateWithWhereUniqueWithoutChatInput>;
    updateMany?: Array<UserChatUpdateManyWithWhereWithoutChatInput>;
    deleteMany?: Array<UserChatScalarWhereInput>;
}
export declare class UserChatUncheckedUpdateManyWithoutChatInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hidden?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserChatUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<UserChatCreateWithoutUserInput>;
    connectOrCreate?: Array<UserChatCreateOrConnectWithoutUserInput>;
    upsert?: Array<UserChatUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof UserChatCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
    update?: Array<UserChatUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<UserChatUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<UserChatScalarWhereInput>;
}
export declare class UserChatUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hidden?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class UserChatUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hidden?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserChatUncheckedUpdateWithoutChatInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hidden?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserChatUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hidden?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class UserChatUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    hidden?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class UserChatUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hidden?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class UserChatUpdateManyWithWhereWithoutChatInput {
    where: InstanceType<typeof UserChatScalarWhereInput>;
    data: InstanceType<typeof UserChatUpdateManyMutationInput>;
}
export declare class UserChatUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof UserChatScalarWhereInput>;
    data: InstanceType<typeof UserChatUpdateManyMutationInput>;
}
export declare class UserChatUpdateManyWithoutChatNestedInput {
    create?: Array<UserChatCreateWithoutChatInput>;
    connectOrCreate?: Array<UserChatCreateOrConnectWithoutChatInput>;
    upsert?: Array<UserChatUpsertWithWhereUniqueWithoutChatInput>;
    createMany?: InstanceType<typeof UserChatCreateManyChatInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
    update?: Array<UserChatUpdateWithWhereUniqueWithoutChatInput>;
    updateMany?: Array<UserChatUpdateManyWithWhereWithoutChatInput>;
    deleteMany?: Array<UserChatScalarWhereInput>;
}
export declare class UserChatUpdateManyWithoutUserNestedInput {
    create?: Array<UserChatCreateWithoutUserInput>;
    connectOrCreate?: Array<UserChatCreateOrConnectWithoutUserInput>;
    upsert?: Array<UserChatUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof UserChatCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>>;
    update?: Array<UserChatUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<UserChatUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<UserChatScalarWhereInput>;
}
export declare class UserChatUpdateWithWhereUniqueWithoutChatInput {
    where: Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>;
    data: InstanceType<typeof UserChatUpdateWithoutChatInput>;
}
export declare class UserChatUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>;
    data: InstanceType<typeof UserChatUpdateWithoutUserInput>;
}
export declare class UserChatUpdateWithoutChatInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hidden?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutUserChatsNestedInput>;
}
export declare class UserChatUpdateWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hidden?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    chat?: InstanceType<typeof ChatUpdateOneRequiredWithoutTargetsNestedInput>;
}
export declare class UserChatUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    hidden?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    pinned?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    chat?: InstanceType<typeof ChatUpdateOneRequiredWithoutTargetsNestedInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutUserChatsNestedInput>;
}
export declare class UserChatUpsertWithWhereUniqueWithoutChatInput {
    where: Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>;
    update: InstanceType<typeof UserChatUpdateWithoutChatInput>;
    create: InstanceType<typeof UserChatCreateWithoutChatInput>;
}
export declare class UserChatUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<UserChatWhereUniqueInput, 'id'>;
    update: InstanceType<typeof UserChatUpdateWithoutUserInput>;
    create: InstanceType<typeof UserChatCreateWithoutUserInput>;
}
export declare class UserChatWhereUniqueInput {
    id?: string;
    AND?: Array<UserChatWhereInput>;
    OR?: Array<UserChatWhereInput>;
    NOT?: Array<UserChatWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    chatId?: InstanceType<typeof UuidFilter>;
    hidden?: InstanceType<typeof BoolFilter>;
    pinned?: InstanceType<typeof BoolFilter>;
    read?: InstanceType<typeof BoolFilter>;
    userId?: InstanceType<typeof UuidFilter>;
    chat?: InstanceType<typeof ChatRelationFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class UserChatWhereInput {
    AND?: Array<UserChatWhereInput>;
    OR?: Array<UserChatWhereInput>;
    NOT?: Array<UserChatWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    chatId?: InstanceType<typeof UuidFilter>;
    hidden?: InstanceType<typeof BoolFilter>;
    pinned?: InstanceType<typeof BoolFilter>;
    read?: InstanceType<typeof BoolFilter>;
    userId?: InstanceType<typeof UuidFilter>;
    chat?: InstanceType<typeof ChatRelationFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class UserChat {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    chatId: string;
    hidden: boolean;
    pinned: boolean;
    read: boolean;
    userId: string;
    chat?: InstanceType<typeof Chat>;
    user?: InstanceType<typeof User>;
}
export declare class AggregateUserChatActivity {
    _count?: InstanceType<typeof UserChatActivityCountAggregate>;
    _min?: InstanceType<typeof UserChatActivityMinAggregate>;
    _max?: InstanceType<typeof UserChatActivityMaxAggregate>;
}
export declare class CreateManyUserChatActivityArgs {
    data: Array<UserChatActivityCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserChatActivityArgs {
    data: InstanceType<typeof UserChatActivityCreateInput>;
}
export declare class DeleteManyUserChatActivityArgs {
    where?: InstanceType<typeof UserChatActivityWhereInput>;
}
export declare class DeleteOneUserChatActivityArgs {
    where: Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>;
}
export declare class FindFirstUserChatActivityOrThrowArgs {
    where?: InstanceType<typeof UserChatActivityWhereInput>;
    orderBy?: Array<UserChatActivityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserChatActivityScalarFieldEnum>;
}
export declare class FindFirstUserChatActivityArgs {
    where?: InstanceType<typeof UserChatActivityWhereInput>;
    orderBy?: Array<UserChatActivityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserChatActivityScalarFieldEnum>;
}
export declare class FindManyUserChatActivityArgs {
    where?: InstanceType<typeof UserChatActivityWhereInput>;
    orderBy?: Array<UserChatActivityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserChatActivityScalarFieldEnum>;
}
export declare class FindUniqueUserChatActivityOrThrowArgs {
    where: Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>;
}
export declare class FindUniqueUserChatActivityArgs {
    where: Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>;
}
export declare class UpdateManyUserChatActivityArgs {
    data: InstanceType<typeof UserChatActivityUpdateManyMutationInput>;
    where?: InstanceType<typeof UserChatActivityWhereInput>;
}
export declare class UpdateOneUserChatActivityArgs {
    data: InstanceType<typeof UserChatActivityUpdateInput>;
    where: Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>;
}
export declare class UpsertOneUserChatActivityArgs {
    where: Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>;
    create: InstanceType<typeof UserChatActivityCreateInput>;
    update: InstanceType<typeof UserChatActivityUpdateInput>;
}
export declare class UserChatActivityAggregateArgs {
    where?: InstanceType<typeof UserChatActivityWhereInput>;
    orderBy?: Array<UserChatActivityOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserChatActivityCountAggregateInput>;
    _min?: InstanceType<typeof UserChatActivityMinAggregateInput>;
    _max?: InstanceType<typeof UserChatActivityMaxAggregateInput>;
}
export declare class UserChatActivityCountAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    chatActivityId?: true;
    userId?: true;
    read?: true;
    starred?: true;
    _all?: true;
}
export declare class UserChatActivityCountAggregate {
    id: number;
    createdAt: number;
    updatedAt: number;
    chatActivityId: number;
    userId: number;
    read: number;
    starred: number;
    _all: number;
}
export declare class UserChatActivityCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatActivityId?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    read?: keyof typeof SortOrder;
    starred?: keyof typeof SortOrder;
}
export declare class UserChatActivityCreateManyChatActivityInputEnvelope {
    data: Array<UserChatActivityCreateManyChatActivityInput>;
    skipDuplicates?: boolean;
}
export declare class UserChatActivityCreateManyChatActivityInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
    read?: boolean;
    starred?: boolean;
}
export declare class UserChatActivityCreateManyUserInputEnvelope {
    data: Array<UserChatActivityCreateManyUserInput>;
    skipDuplicates?: boolean;
}
export declare class UserChatActivityCreateManyUserInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatActivityId: string;
    read?: boolean;
    starred?: boolean;
}
export declare class UserChatActivityCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatActivityId: string;
    userId: string;
    read?: boolean;
    starred?: boolean;
}
export declare class UserChatActivityCreateNestedManyWithoutChatActivityInput {
    create?: Array<UserChatActivityCreateWithoutChatActivityInput>;
    connectOrCreate?: Array<UserChatActivityCreateOrConnectWithoutChatActivityInput>;
    createMany?: InstanceType<typeof UserChatActivityCreateManyChatActivityInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
}
export declare class UserChatActivityCreateNestedManyWithoutUserInput {
    create?: Array<UserChatActivityCreateWithoutUserInput>;
    connectOrCreate?: Array<UserChatActivityCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof UserChatActivityCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
}
export declare class UserChatActivityCreateOrConnectWithoutChatActivityInput {
    where: Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>;
    create: InstanceType<typeof UserChatActivityCreateWithoutChatActivityInput>;
}
export declare class UserChatActivityCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>;
    create: InstanceType<typeof UserChatActivityCreateWithoutUserInput>;
}
export declare class UserChatActivityCreateWithoutChatActivityInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    read?: boolean;
    starred?: boolean;
    user: InstanceType<typeof UserCreateNestedOneWithoutActivitiesInput>;
}
export declare class UserChatActivityCreateWithoutUserInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    read?: boolean;
    starred?: boolean;
    chatActivity: InstanceType<typeof ChatActivityCreateNestedOneWithoutExecutorInput>;
}
export declare class UserChatActivityCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    read?: boolean;
    starred?: boolean;
    chatActivity: InstanceType<typeof ChatActivityCreateNestedOneWithoutExecutorInput>;
    user: InstanceType<typeof UserCreateNestedOneWithoutActivitiesInput>;
}
export declare class UserChatActivityGroupByArgs {
    where?: InstanceType<typeof UserChatActivityWhereInput>;
    orderBy?: Array<UserChatActivityOrderByWithAggregationInput>;
    by: Array<keyof typeof UserChatActivityScalarFieldEnum>;
    having?: InstanceType<typeof UserChatActivityScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserChatActivityCountAggregateInput>;
    _min?: InstanceType<typeof UserChatActivityMinAggregateInput>;
    _max?: InstanceType<typeof UserChatActivityMaxAggregateInput>;
}
export declare class UserChatActivityGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    chatActivityId: string;
    userId: string;
    read: boolean;
    starred: boolean;
    _count?: InstanceType<typeof UserChatActivityCountAggregate>;
    _min?: InstanceType<typeof UserChatActivityMinAggregate>;
    _max?: InstanceType<typeof UserChatActivityMaxAggregate>;
}
export declare class UserChatActivityListRelationFilter {
    every?: InstanceType<typeof UserChatActivityWhereInput>;
    some?: InstanceType<typeof UserChatActivityWhereInput>;
    none?: InstanceType<typeof UserChatActivityWhereInput>;
}
export declare class UserChatActivityMaxAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    chatActivityId?: true;
    userId?: true;
    read?: true;
    starred?: true;
}
export declare class UserChatActivityMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatActivityId?: string;
    userId?: string;
    read?: boolean;
    starred?: boolean;
}
export declare class UserChatActivityMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatActivityId?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    read?: keyof typeof SortOrder;
    starred?: keyof typeof SortOrder;
}
export declare class UserChatActivityMinAggregateInput {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    chatActivityId?: true;
    userId?: true;
    read?: true;
    starred?: true;
}
export declare class UserChatActivityMinAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatActivityId?: string;
    userId?: string;
    read?: boolean;
    starred?: boolean;
}
export declare class UserChatActivityMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatActivityId?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    read?: keyof typeof SortOrder;
    starred?: keyof typeof SortOrder;
}
export declare class UserChatActivityOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class UserChatActivityOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatActivityId?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    read?: keyof typeof SortOrder;
    starred?: keyof typeof SortOrder;
    _count?: InstanceType<typeof UserChatActivityCountOrderByAggregateInput>;
    _max?: InstanceType<typeof UserChatActivityMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserChatActivityMinOrderByAggregateInput>;
}
export declare class UserChatActivityOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    chatActivityId?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    read?: keyof typeof SortOrder;
    starred?: keyof typeof SortOrder;
    chatActivity?: InstanceType<typeof ChatActivityOrderByWithRelationInput>;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class UserChatActivityScalarWhereWithAggregatesInput {
    AND?: Array<UserChatActivityScalarWhereWithAggregatesInput>;
    OR?: Array<UserChatActivityScalarWhereWithAggregatesInput>;
    NOT?: Array<UserChatActivityScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    chatActivityId?: InstanceType<typeof UuidWithAggregatesFilter>;
    userId?: InstanceType<typeof UuidWithAggregatesFilter>;
    read?: InstanceType<typeof BoolWithAggregatesFilter>;
    starred?: InstanceType<typeof BoolWithAggregatesFilter>;
}
export declare class UserChatActivityScalarWhereInput {
    AND?: Array<UserChatActivityScalarWhereInput>;
    OR?: Array<UserChatActivityScalarWhereInput>;
    NOT?: Array<UserChatActivityScalarWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    chatActivityId?: InstanceType<typeof UuidFilter>;
    userId?: InstanceType<typeof UuidFilter>;
    read?: InstanceType<typeof BoolFilter>;
    starred?: InstanceType<typeof BoolFilter>;
}
export declare class UserChatActivityUncheckedCreateNestedManyWithoutChatActivityInput {
    create?: Array<UserChatActivityCreateWithoutChatActivityInput>;
    connectOrCreate?: Array<UserChatActivityCreateOrConnectWithoutChatActivityInput>;
    createMany?: InstanceType<typeof UserChatActivityCreateManyChatActivityInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
}
export declare class UserChatActivityUncheckedCreateNestedManyWithoutUserInput {
    create?: Array<UserChatActivityCreateWithoutUserInput>;
    connectOrCreate?: Array<UserChatActivityCreateOrConnectWithoutUserInput>;
    createMany?: InstanceType<typeof UserChatActivityCreateManyUserInputEnvelope>;
    connect?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
}
export declare class UserChatActivityUncheckedCreateWithoutChatActivityInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
    read?: boolean;
    starred?: boolean;
}
export declare class UserChatActivityUncheckedCreateWithoutUserInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatActivityId: string;
    read?: boolean;
    starred?: boolean;
}
export declare class UserChatActivityUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chatActivityId: string;
    userId: string;
    read?: boolean;
    starred?: boolean;
}
export declare class UserChatActivityUncheckedUpdateManyWithoutChatActivityNestedInput {
    create?: Array<UserChatActivityCreateWithoutChatActivityInput>;
    connectOrCreate?: Array<UserChatActivityCreateOrConnectWithoutChatActivityInput>;
    upsert?: Array<UserChatActivityUpsertWithWhereUniqueWithoutChatActivityInput>;
    createMany?: InstanceType<typeof UserChatActivityCreateManyChatActivityInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
    update?: Array<UserChatActivityUpdateWithWhereUniqueWithoutChatActivityInput>;
    updateMany?: Array<UserChatActivityUpdateManyWithWhereWithoutChatActivityInput>;
    deleteMany?: Array<UserChatActivityScalarWhereInput>;
}
export declare class UserChatActivityUncheckedUpdateManyWithoutChatActivityInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    starred?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class UserChatActivityUncheckedUpdateManyWithoutUserNestedInput {
    create?: Array<UserChatActivityCreateWithoutUserInput>;
    connectOrCreate?: Array<UserChatActivityCreateOrConnectWithoutUserInput>;
    upsert?: Array<UserChatActivityUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof UserChatActivityCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
    update?: Array<UserChatActivityUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<UserChatActivityUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<UserChatActivityScalarWhereInput>;
}
export declare class UserChatActivityUncheckedUpdateManyWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatActivityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    starred?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class UserChatActivityUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatActivityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    starred?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class UserChatActivityUncheckedUpdateWithoutChatActivityInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    starred?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class UserChatActivityUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatActivityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    starred?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class UserChatActivityUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    chatActivityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    starred?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class UserChatActivityUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    starred?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
}
export declare class UserChatActivityUpdateManyWithWhereWithoutChatActivityInput {
    where: InstanceType<typeof UserChatActivityScalarWhereInput>;
    data: InstanceType<typeof UserChatActivityUpdateManyMutationInput>;
}
export declare class UserChatActivityUpdateManyWithWhereWithoutUserInput {
    where: InstanceType<typeof UserChatActivityScalarWhereInput>;
    data: InstanceType<typeof UserChatActivityUpdateManyMutationInput>;
}
export declare class UserChatActivityUpdateManyWithoutChatActivityNestedInput {
    create?: Array<UserChatActivityCreateWithoutChatActivityInput>;
    connectOrCreate?: Array<UserChatActivityCreateOrConnectWithoutChatActivityInput>;
    upsert?: Array<UserChatActivityUpsertWithWhereUniqueWithoutChatActivityInput>;
    createMany?: InstanceType<typeof UserChatActivityCreateManyChatActivityInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
    update?: Array<UserChatActivityUpdateWithWhereUniqueWithoutChatActivityInput>;
    updateMany?: Array<UserChatActivityUpdateManyWithWhereWithoutChatActivityInput>;
    deleteMany?: Array<UserChatActivityScalarWhereInput>;
}
export declare class UserChatActivityUpdateManyWithoutUserNestedInput {
    create?: Array<UserChatActivityCreateWithoutUserInput>;
    connectOrCreate?: Array<UserChatActivityCreateOrConnectWithoutUserInput>;
    upsert?: Array<UserChatActivityUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: InstanceType<typeof UserChatActivityCreateManyUserInputEnvelope>;
    set?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>>;
    update?: Array<UserChatActivityUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<UserChatActivityUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<UserChatActivityScalarWhereInput>;
}
export declare class UserChatActivityUpdateWithWhereUniqueWithoutChatActivityInput {
    where: Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>;
    data: InstanceType<typeof UserChatActivityUpdateWithoutChatActivityInput>;
}
export declare class UserChatActivityUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>;
    data: InstanceType<typeof UserChatActivityUpdateWithoutUserInput>;
}
export declare class UserChatActivityUpdateWithoutChatActivityInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    starred?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutActivitiesNestedInput>;
}
export declare class UserChatActivityUpdateWithoutUserInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    starred?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    chatActivity?: InstanceType<typeof ChatActivityUpdateOneRequiredWithoutExecutorNestedInput>;
}
export declare class UserChatActivityUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    read?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    starred?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    chatActivity?: InstanceType<typeof ChatActivityUpdateOneRequiredWithoutExecutorNestedInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutActivitiesNestedInput>;
}
export declare class UserChatActivityUpsertWithWhereUniqueWithoutChatActivityInput {
    where: Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>;
    update: InstanceType<typeof UserChatActivityUpdateWithoutChatActivityInput>;
    create: InstanceType<typeof UserChatActivityCreateWithoutChatActivityInput>;
}
export declare class UserChatActivityUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<UserChatActivityWhereUniqueInput, 'id'>;
    update: InstanceType<typeof UserChatActivityUpdateWithoutUserInput>;
    create: InstanceType<typeof UserChatActivityCreateWithoutUserInput>;
}
export declare class UserChatActivityWhereUniqueInput {
    id?: string;
    AND?: Array<UserChatActivityWhereInput>;
    OR?: Array<UserChatActivityWhereInput>;
    NOT?: Array<UserChatActivityWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    chatActivityId?: InstanceType<typeof UuidFilter>;
    userId?: InstanceType<typeof UuidFilter>;
    read?: InstanceType<typeof BoolFilter>;
    starred?: InstanceType<typeof BoolFilter>;
    chatActivity?: InstanceType<typeof ChatActivityRelationFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class UserChatActivityWhereInput {
    AND?: Array<UserChatActivityWhereInput>;
    OR?: Array<UserChatActivityWhereInput>;
    NOT?: Array<UserChatActivityWhereInput>;
    id?: InstanceType<typeof UuidFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    chatActivityId?: InstanceType<typeof UuidFilter>;
    userId?: InstanceType<typeof UuidFilter>;
    read?: InstanceType<typeof BoolFilter>;
    starred?: InstanceType<typeof BoolFilter>;
    chatActivity?: InstanceType<typeof ChatActivityRelationFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
}
export declare class UserChatActivity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    chatActivityId: string;
    userId: string;
    read: boolean;
    starred: boolean;
    chatActivity?: InstanceType<typeof ChatActivity>;
    user?: InstanceType<typeof User>;
}
